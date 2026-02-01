import { chargerDonnees } from "./base.js";
import {
  buttons,
  filtrerBase,
  recherchePartieDansTableau,
  chargementPage,
  CacherLesCardsDesArticleNonActif,
} from "./function.js";
import { toCard } from "./dom.js";

// Attendre le chargement des données avant d'initialiser l'application
async function initialiserApp() {
  const data = await chargerDonnees();
  
  if (!data) {
    console.error('Impossible de charger les données');
    return;
  }
  
  const { produits, dateValable } = data;
  
  // Importer articleNonActifNonChanger depuis base.js
  const baseModule = await import("./base.js");
  const articlesNonActifs = baseModule.articleNonActifNonChanger || "";
  
  const cards = document.querySelector(".cards");
  const rayon = document.querySelector(".active-btn").id;
  const inputRecherche = document.getElementById("inputText");
  const baliseDatevalidation = document.querySelector("header p .date");

  // Charger la page initiale
  chargementPage(
    produits,
    cards,
    rayon,
    inputRecherche,
    baliseDatevalidation,
    dateValable,
    articlesNonActifs
  );

  // Initialiser les boutons
  buttons(produits, dateValable, articlesNonActifs);

  // Gérer la recherche
  inputRecherche.addEventListener("input", (e) => {
    const rayon = document.querySelector(".active-btn").id;
    cards.innerHTML = toCard(
      recherchePartieDansTableau(filtrerBase(produits, rayon), e.target.value),
      articlesNonActifs
    );
    CacherLesCardsDesArticleNonActif(rayon);
  });
}

// Démarrer l'application quand le DOM est chargé
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiserApp);
} else {
  initialiserApp();
}