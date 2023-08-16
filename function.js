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
import { articleNonActifNonChanger } from "./base.js";

//----------------------------------------------------------------

/**
 * fonction pour recherche une chaine de carractere dans un tableau
 * @param {Array} tableau
 * @param {string} chaineRechercher
 * @returns {Array}
 */
function recherchePartieDansTableau(tableau, chaineRechercher) {
  return tableau.filter((element) =>
    element[1].includes(chaineRechercher.toUpperCase())
  );
}

//------------------------------------------------------------------------>
/**
 * fonction pour traiter une chaine de carractere , qu est ici est une base special pour cet application (separateur ";");
 * la filtrer selon le rayon choisi et retrun un tableau
 * @param {String} base
 * @param {String} rayonFilter
 * @returns {Array}
 */
function filtrerBase(base, rayonFilter) {
  return base
    .trim()
    .split("\n")
    .map((line) => line.split(";"))
    .filter((line) => {
      return line[3] == rayonFilter;
    });
}

//-------------------------------------------------------------------------->

/**
 * function de chargement de page
 * @param {String} base base de donné string
 * @param {HTMLElement} cardsBaliseHtml la balise "cards" qui englobe tout les card generé.
 * @param {String} rayon rayon choisi pour etre affiché (recuperer par le button cliker)
 * @param {HTMLElement} input (pour afficher dans l input de recherche placeholder de rayon sujet de recherche)
 * @param {HTMLElement} baliseDateValidation (baslie pour afficher la date de validaiton)
 * @param {object} datevalidation (la date de validaiton)
 */
function chargementPage(
  base,
  cardsBaliseHtml,
  rayon,
  input,
  baliseDateValidation,
  datevalidation
) {
  cardsBaliseHtml.innerHTML = toCard(filtrerBase(base, rayon));
  input.setAttribute("placeholder", `Rechercher dans ${rayon}`);
  baliseDateValidation.innerText = datevalidation[rayon];
  CacherLesCardsDesArticleNonActif(rayon);
}

//------------------------------------------------------------------------------------->

/**
 * function pour les bouttons ET  lancer le filtrage de base pour les afficher dans le dom
 * @param {String} base
 * @param {HTMLElement} baliseHtml
 */
function buttons(base, dateValable) {
  const buttons = document.querySelectorAll(".nav button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      buttons.forEach((btn) => {
        btn.classList.remove("active-btn");
      });

      //ajouter la class active au boutton cliker
      btn.classList.add("active-btn");

      chargementPage(
        base,
        document.querySelector(".cards"),
        document.querySelector(".active-btn").id,
        document.getElementById("inputText"),
        document.querySelector("header p .date"),
        dateValable
      );
    });
  });
}

//------------------------------------------------------------------------------------->

/**
 * fonction qui met a jour les prix de la base.
 * @param {string} uneBase la base globale
 * @param {string} nouveauPrix les nouveaux prix en string comportent (code,prix)
 * @returns {object} deux valeurs en retrour, 1ere : la base mise a jour, 2eme: les codes non trouvé pour etre a jour.
 */
function mettreAJourPrix(uneBase, nouveauPrix = "") {
  //variable pour les article non trouvé
  let articleNonChanger = [];
  let articleNonTrouver = [];

  //si il  n y a pas de nouveau prix retourn immidiatement la base
  if (nouveauPrix == "") {
    return {
      base: uneBase,
      articleNonChanger: [],
      articleNonTrouver: [],
    };
  }

  // Convertir la base en tableau de lignes
  const lignesBase = uneBase
    .trim()
    .split("\n")
    .map((line) => line.split(";"));

  // Convertir les nouveaux prix en tableau de lignes
  const lignesNouveauxPrix = nouveauPrix
    .trim()
    .split("\n")
    .map((line) => line.split(";"));

  // Créer un dictionnaire des nouveaux prix
  const nouveauxPrixMap = new Map();
  for (const lignePrix of lignesNouveauxPrix) {
    const idProduit = lignePrix[0];
    const prix = lignePrix[1];
    nouveauxPrixMap.set(idProduit, prix);
  }

  // Mettre à jour les prix dans la base
  for (const ligneBase of lignesBase) {
    const idProduit = ligneBase[0];
    if (nouveauxPrixMap.has(idProduit)) {
      const nouveauPrix = nouveauxPrixMap.get(idProduit);
      ligneBase[2] = nouveauPrix;
    } else {
      articleNonChanger.push(idProduit);
    }
  }
  //----------------------------------------------------------------->

  // Créer un dictionnaire de base
  const baseMap = new Map();
  for (const ligneBase of lignesBase) {
    const idProduit = ligneBase[0];
    const prix = ligneBase[2];
    baseMap.set(idProduit, prix);
  }

  // rechercher les articles non trouver sur la base
  for (const lignePrix of lignesNouveauxPrix) {
    const idProduit = lignePrix[0];
    if (baseMap.has(idProduit)) {
    } else {
      articleNonTrouver.push(idProduit);
    }
  }

  //-------------------------------------------------------------->

  // Reconstituer la base mise à jour
  const baseMiseAJour = lignesBase.map((line) => line.join(";")).join("\n");

  return {
    base: baseMiseAJour,
    articleNonActifNonChanger: articleNonChanger.join("\n"),
    articleActifNonTrouver: articleNonTrouver.join("\n"),
  };
}

//--------------------------------------------------------------------------------->
/**
 * le decimal du prix
 * @param {string} prix
 * @returns
 */
function editionDecimal(prix) {
  const decimal = prix.split(",")[1];
  if (decimal == "" || decimal == undefined) {
    return "00";
  } else if (decimal < 10) {
    return decimal + "0";
  } else {
    return decimal;
  }
}
//----------------------------------------------------------------------------------->

/**
 * cacher les card des articles non actif
 * @param {string} rayon
 */
function CacherLesCardsDesArticleNonActif(rayon) {
  if (articleNonActifNonChanger == undefined) return;
  if (
    rayon == "legume" ||
    rayon == "fruit" ||
    rayon == "volaille" ||
    rayon == "poissonnerie"
  ) {
    articleNonActifNonChanger
      .trim()
      .split("\n")
      .forEach((element) => {
        const className =
          document.getElementById(`${element}`)?.className.split(" ")[1] ?? "";
        console.log(className);
        if (className == rayon) {
          document.getElementById(`${element}`).classList.add("displaynone");
        }
      });
  }
}
