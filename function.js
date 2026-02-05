export {
  filtrerParRayon,
  rechercheParDesignation,
  buttons,
  chargementPage,
  editionDecimal,
};
import { toCard } from "./dom.js";

/**
 * Filtre les produits par rayon
 * @param {Array} produits
 * @param {String} rayon
 * @returns {Array}
 */
function filtrerParRayon(produits, rayon) {
  return produits.filter(p => p.rayon === rayon);
}

/**
 * Recherche des produits par désignation
 * @param {Array} produits
 * @param {string} recherche
 * @returns {Array}
 */
function rechercheParDesignation(produits, recherche) {
  if (!recherche) return produits;
  
  return produits.filter(p =>
    p.designation.toUpperCase().includes(recherche.toUpperCase())
  );
}

/**
 * Charge et affiche une page avec les produits du rayon sélectionné
 * @param {Array} produits
 * @param {HTMLElement} cardsElement
 * @param {String} rayon
 * @param {HTMLElement} inputElement
 * @param {HTMLElement} dateElement
 * @param {Object} dateValable
 */
function chargementPage(
  produits,
  cardsElement,
  rayon,
  inputElement,
  dateElement,
  dateValable
) {
  const produitsFiltres = filtrerParRayon(produits, rayon);
  cardsElement.innerHTML = toCard(produitsFiltres);
  inputElement.setAttribute("placeholder", `Rechercher dans ${rayon}`);
  inputElement.value = "";
  dateElement.innerText = dateValable[rayon] || "Date non disponible";
}

/**
 * Gère les événements des boutons de navigation
 * @param {Array} produits
 * @param {Object} dateValable
 */
function buttons(produits, dateValable) {
  const buttons = document.querySelectorAll(".nav button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      buttons.forEach((b) => b.classList.remove("active-btn"));

      // Ajouter la classe active au bouton cliqué
      btn.classList.add("active-btn");

      // Charger le contenu du rayon sélectionné
      chargementPage(
        produits,
        document.querySelector(".cards"),
        btn.id,
        document.getElementById("inputText"),
        document.querySelector("header p .date"),
        dateValable
      );
    });
  });
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