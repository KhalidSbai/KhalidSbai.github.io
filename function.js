export {
  filtrerBase,
  recherchePartieDansTableau,
  buttons,
  chargementPage,
  mettreAJourPrix,
  editionDecimal,
  CacherLesCardsDesArticleNonActif,
};
import { toCard } from "./dom.js";

/**
 * Recherche une chaîne de caractères dans un tableau
 * @param {Array} tableau
 * @param {string} chaineRechercher
 * @returns {Array}
 */
function recherchePartieDansTableau(tableau, chaineRechercher) {
  if (!chaineRechercher) return tableau;
  
  return tableau.filter((element) =>
    element[1].toUpperCase().includes(chaineRechercher.toUpperCase())
  );
}

/**
 * Filtre la base selon le rayon choisi
 * @param {String} base
 * @param {String} rayonFilter
 * @returns {Array}
 */
function filtrerBase(base, rayonFilter) {
  return base
    .trim()
    .split("\n")
    .map((line) => line.split(";"))
    .filter((line) => line[3] === rayonFilter);
}

/**
 * Charge et affiche une page avec les produits du rayon sélectionné
 * @param {String} base
 * @param {HTMLElement} cardsBaliseHtml
 * @param {String} rayon
 * @param {HTMLElement} input
 * @param {HTMLElement} baliseDateValidation
 * @param {Object} datevalidation
 * @param {String} articlesNonActifs
 */
function chargementPage(
  base,
  cardsBaliseHtml,
  rayon,
  input,
  baliseDateValidation,
  datevalidation,
  articlesNonActifs = ""
) {
  cardsBaliseHtml.innerHTML = toCard(filtrerBase(base, rayon), articlesNonActifs);
  input.setAttribute("placeholder", `Rechercher dans ${rayon}`);
  input.value = ""; // Réinitialiser la recherche
  baliseDateValidation.innerText = datevalidation[rayon] || "Date non disponible";
  CacherLesCardsDesArticleNonActif(rayon);
}

/**
 * Gère les événements des boutons de navigation
 * @param {String} base
 * @param {Object} dateValable
 * @param {String} articlesNonActifs
 */
function buttons(base, dateValable, articlesNonActifs = "") {
  const buttons = document.querySelectorAll(".nav button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Retirer la classe active de tous les boutons
      buttons.forEach((b) => b.classList.remove("active-btn"));

      // Ajouter la classe active au bouton cliqué
      btn.classList.add("active-btn");

      // Charger le contenu du rayon sélectionné
      chargementPage(
        base,
        document.querySelector(".cards"),
        btn.id,
        document.getElementById("inputText"),
        document.querySelector("header p .date"),
        dateValable,
        articlesNonActifs
      );
    });
  });
}

/**
 * Met à jour les prix de la base
 * @param {string} uneBase
 * @param {string} nouveauPrix
 * @returns {Object}
 */
function mettreAJourPrix(uneBase, nouveauPrix = "") {
  let articleNonChanger = [];
  let articleNonTrouver = [];

  if (!nouveauPrix) {
    return {
      base: uneBase,
      articleNonActifNonChanger: "",
      articleActifNonTrouver: "",
    };
  }

  // Convertir la base en tableau
  const lignesBase = uneBase
    .trim()
    .split("\n")
    .map((line) => line.split(";"));

  // Convertir les nouveaux prix en Map pour recherche rapide
  const nouveauxPrixMap = new Map();
  nouveauPrix
    .trim()
    .split("\n")
    .forEach((ligne) => {
      const [code, prix] = ligne.split(";");
      if (code && prix) {
        nouveauxPrixMap.set(code, prix);
      }
    });

  // Créer une Map de la base pour vérifier les articles
  const baseMap = new Map(lignesBase.map(ligne => [ligne[0], ligne]));

  // Mettre à jour les prix dans la base
  lignesBase.forEach((ligne) => {
    const code = ligne[0];
    if (nouveauxPrixMap.has(code)) {
      ligne[2] = nouveauxPrixMap.get(code);
    } else {
      articleNonChanger.push(code);
    }
  });

  // Trouver les articles non trouvés dans la base
  nouveauxPrixMap.forEach((prix, code) => {
    if (!baseMap.has(code)) {
      articleNonTrouver.push(code);
    }
  });

  // Reconstituer la base
  const baseMiseAJour = lignesBase.map((ligne) => ligne.join(";")).join("\n");

  return {
    base: baseMiseAJour,
    articleNonActifNonChanger: articleNonChanger.join("\n"),
    articleActifNonTrouver: articleNonTrouver.join("\n"),
  };
}

/**
 * Formate la partie décimale du prix
 * @param {string} prix
 * @returns {string}
 */
function editionDecimal(prix) {
  const parties = prix.split(",");
  if (parties.length < 2 || !parties[1]) {
    return "00";
  }
  
  const decimal = parties[1];
  return decimal.length === 1 ? decimal + "0" : decimal;
}

/**
 * Cache les cartes des articles non actifs
 * @param {string} rayon
 */
function CacherLesCardsDesArticleNonActif(rayon) {
  // Import dynamique pour éviter la dépendance circulaire
  import("./base.js").then((module) => {
    const { articleNonActifNonChanger } = module;
    
    if (!articleNonActifNonChanger) return;

    const rayonsActifs = ["legume", "fruit", "volaille", "poissonnerie"];
    
    if (rayonsActifs.includes(rayon)) {
      articleNonActifNonChanger
        .trim()
        .split("\n")
        .forEach((code) => {
          const element = document.getElementById(code);
          if (element) {
            const elementRayon = element.className.split(" ")[1];
            if (elementRayon === rayon) {
              element.classList.add("displaynone");
            }
          }
        });
    }
  });
}