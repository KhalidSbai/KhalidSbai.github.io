export {
  filtrerBase,
  recherchePartieDansTableau,
  buttons,
  chargementPage,
  mettreAJourPrix,
};
import { toCard } from "./dom.js";

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
  //si il  n y a pas de nouveau prix retourn immidiatement la base
  if (nouveauPrix == "") {
    return {
      base: uneBase,
      codeNonTrouver: "",
    };
  }

  //variable pour les article non trouvé
  let codeNonTrouver = [];

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
      codeNonTrouver.push(idProduit);
    }
  }

  // Reconstituer la base mise à jour
  const baseMiseAJour = lignesBase.map((line) => line.join(";")).join("\n");

  return {
    base: baseMiseAJour,
    codeNonTrouver: codeNonTrouver.join("\n"),
  };
}
