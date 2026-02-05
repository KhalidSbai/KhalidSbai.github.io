export { produitsAvecPrix, dateValable, rayons, chargerDonnees };

let produitsAvecPrix = [];
let dateValable = {};
let rayons = [];

/**
 * Charge les données depuis data.json et fusionne produits avec prix
 */
async function chargerDonnees() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    
    dateValable = data.dateValable;
    
    // Fusionner produits avec prix
    produitsAvecPrix = data.produits
      .filter(produit => data.nouveauPrix[produit.code]) // Garder seulement les produits avec prix
      .map(produit => ({
        ...produit,
        prix: data.nouveauPrix[produit.code]
      }));
    
    // Extraire les rayons uniques et les trier
    const rayonsUniques = [...new Set(produitsAvecPrix.map(p => p.rayon))];
    
    // Définir l'ordre des rayons
    const ordreRayons = ['legume', 'fruit', 'boucherie', 'volaille', 'poissonnerie'];
    
    rayons = ordreRayons.filter(r => rayonsUniques.includes(r));
    
    // Ajouter les rayons non prévus (au cas où)
    rayonsUniques.forEach(r => {
      if (!rayons.includes(r)) {
        rayons.push(r);
      }
    });
    
    console.log(`${produitsAvecPrix.length} produits chargés`);
    console.log(`Rayons disponibles: ${rayons.join(', ')}`);
    
    return { produitsAvecPrix, dateValable, rayons };
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    return null;
  }
}