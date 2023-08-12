export { filtrerBase, recherchePartieDansTableau, buttons, chargementPage };
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
 */
function chargementPage(base, cardsBaliseHtml, rayon, input) {
  cardsBaliseHtml.innerHTML = toCard(filtrerBase(base, rayon));
  input.setAttribute("placeholder", `Rechercher dans ${rayon}`);
}

//------------------------------------------------------------------------------------->

/**
 * function pour les bouttons ET  lancer le filtrage de base pour les afficher dans le dom
 * @param {String} base
 * @param {HTMLElement} baliseHtml
 */
function buttons(base) {
  const buttons = document.querySelectorAll(".nav button");
  const inputText = document.getElementById("inputText");

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
        document.getElementById("inputText")
      );
      // inputText.setAttribute("placeholder", `Rechercher dans ${e.target.id}`);

      // baliseHtml.innerHTML = toCard(filtrerBase(base, `${e.target.id}`));
    });
  });
}
