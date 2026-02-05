import { chargerDonnees } from "./base.js";
import {
  buttons,
  filtrerParRayon,
  rechercheParDesignation,
  chargementPage,
} from "./function.js";
import { toCard, genererBoutonsRayons } from "./dom.js";

/**
 * Initialise l'application
 */
async function initialiserApp() {
  const data = await chargerDonnees();
  
  if (!data) {
    console.error('Impossible de charger les données');
    document.querySelector('.cards').innerHTML = 
      '<p style="text-align:center; padding:20px;">Erreur de chargement des données</p>';
    return;
  }
  
  const { produitsAvecPrix, dateValable, rayons } = data;
  
  // Générer les boutons de navigation
  genererBoutonsRayons(rayons);
  
  const cards = document.querySelector(".cards");
  const inputRecherche = document.getElementById("inputText");
  const baliseDatevalidation = document.querySelector("header p .date");

  // Charger la page initiale (premier rayon)
  const rayonInitial = rayons[0];
  chargementPage(
    produitsAvecPrix,
    cards,
    rayonInitial,
    inputRecherche,
    baliseDatevalidation,
    dateValable
  );

  // Initialiser les boutons (après génération)
  buttons(produitsAvecPrix, dateValable);

  // Gérer la recherche
  inputRecherche.addEventListener("input", (e) => {
    const rayonActif = document.querySelector(".active-btn").id;
    const produitsDuRayon = filtrerParRayon(produitsAvecPrix, rayonActif);
    const resultatRecherche = rechercheParDesignation(produitsDuRayon, e.target.value);
    cards.innerHTML = toCard(resultatRecherche);
  });
}

// Démarrer l'application quand le DOM est chargé
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiserApp);
} else {
  initialiserApp();
}