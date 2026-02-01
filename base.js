import { mettreAJourPrix } from "./function.js";

export { produits, dateValable, articleActifNonTrouver, articleNonActifNonChanger };

// Charger les données depuis le fichier JSON
let produits = [];
let dateValable = {};
let articleActifNonTrouver = "";
let articleNonActifNonChanger = "";

async function chargerDonnees() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    
    // Convertir les produits en format string pour compatibilité
    const produitsString = data.produits
      .map(p => `${p.code};${p.designation};${p.prix};${p.rayon};${p.unite};${p.codeImage};${p.ordre}`)
      .join('\n');
    
    // Convertir nouveauPrix en format string
    const nouveauPrixString = Object.entries(data.nouveauPrix || {})
      .map(([code, prix]) => `${code};${prix}`)
      .join('\n');
    
    dateValable = data.dateValable;
    
    // Mettre à jour les prix
    const result = mettreAJourPrix(produitsString, nouveauPrixString);
    produits = result.base;
    articleNonActifNonChanger = result.articleNonActifNonChanger;
    articleActifNonTrouver = result.articleActifNonTrouver;
    
    console.log(`Articles non actifs non changés : \n${articleNonActifNonChanger}`);
    console.log(`Articles actifs non trouvés : \n${articleActifNonTrouver}`);
    
    return { produits, dateValable };
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    return null;
  }
}

// Exporter la fonction de chargement
export { chargerDonnees };