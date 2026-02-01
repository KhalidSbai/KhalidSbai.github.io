import {
  editionDecimal,
  CacherLesCardsDesArticleNonActif,
} from "./function.js";

export { toCard };

/**
 * fonction pour afficher les différents articles dans le dom
 * @param {Array} array
 * @param {string} articlesNonActifs - Liste des codes d'articles non actifs
 */
function toCard(array, articlesNonActifs = "") {
  let compteurVisibles = 0;
  let html = "";
  
  // Convertir la liste des articles non actifs en tableau
  const codesNonActifs = articlesNonActifs
    ? articlesNonActifs.split("\n").map(code => code.trim()).filter(Boolean)
    : [];

  array.forEach((elem) => {
    // Vérifier si la carte sera visible
    const estVisible = !codesNonActifs.includes(elem[0]);

    // Générer la carte
    html += /*html*/ `<div class="card ${elem[3]}" id="${elem[0]}">
      <div class="image">
        <img src="image/${elem[5]}.jpg" alt="" srcset="" />
      </div>
      <div class="infoCard">
        <div class="designation">
            <span style="color:red; font-weight:600">${" " || elem[0]} </span>${
      elem[1]
    }</div>
        <div class="prix">
          <span class="dh">Dh </span>${
            elem[2].split(",")[0]
          }<span class="decimal">.${editionDecimal(elem[2])} </span
          ><span class="unite">/${elem[4]}</span>
        </div>
      </div>
    </div>`;

    // Incrémenter seulement si la carte est visible
    if (estVisible) {
      compteurVisibles++;

      // Ajouter page-break après chaque 16 cartes visibles
      if (compteurVisibles % 16 === 0) {
        html += `<span class="page-break"></span>
    <section>
    <header>
            <div class="logo">
              <img src="image/logo_marche.png" alt="" srcset="" />
            </div>
            <p style="display : none">Valable jusqu'au : <span class="date">31/08/2023</span></p>
            <h1>
              Yo
              <p>Market</p>
            </h1>
          </header>
    </section>`;
      }
    }
  });

  return html;
}