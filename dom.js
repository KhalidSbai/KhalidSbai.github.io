import { editionDecimal } from "./function.js";

export { toCard, genererBoutonsRayons };

/**
 * Génère les boutons de navigation des rayons
 * @param {Array} rayons - Liste des rayons
 * @param {string} rayonActif - Rayon actif par défaut
 */
function genererBoutonsRayons(rayons, rayonActif = null) {
  const navElement = document.querySelector('.nav');
  
  if (!navElement) return;
  
  // Vider les boutons existants
  navElement.innerHTML = '';
  
  // Créer un bouton pour chaque rayon
  rayons.forEach((rayon, index) => {
    const button = document.createElement('button');
    button.id = rayon;
    button.textContent = rayon.charAt(0).toUpperCase() + rayon.slice(1);
    
    // Activer le premier rayon par défaut
    if ((rayonActif && rayon === rayonActif) || (!rayonActif && index === 0)) {
      button.classList.add('active-btn');
    }
    
    navElement.appendChild(button);
  });
}

/**
 * Affiche les articles dans le DOM
 * @param {Array} array - Tableau de produits avec prix
 */
function toCard(array) {
  let compteurVisibles = 0;
  let html = "";

  array.forEach((produit) => {
    // Générer la carte
    html += /*html*/ `<div class="card ${produit.rayon}" id="${produit.code}">
      <div class="image">
        <img src="image/${produit.codeImage}.jpg" alt="${produit.designation}" />
      </div>
      <div class="infoCard">
        <div class="designation">
            ${produit.designation}
        </div>
        <div class="prix">
          <span class="dh">Dh </span>${produit.prix.split(",")[0]}<span class="decimal">.${editionDecimal(produit.prix)}</span><span class="unite">/${produit.unite}</span>
        </div>
      </div>
    </div>`;

    compteurVisibles++;

    // Ajouter page-break après chaque 16 cartes
    if (compteurVisibles % 16 === 0) {
      html += `<span class="page-break"></span>
    <section>
      <header>
        <div class="logo">
          <img src="image/logo_marche.png" alt="Logo" />
        </div>
        <p>Valable jusqu'au : <span class="date">31/08/2023</span></p>
        <h1>
          Yo
          <p>Market</p>
        </h1>
      </header>
    </section>`;
    }
  });

  return html;
}