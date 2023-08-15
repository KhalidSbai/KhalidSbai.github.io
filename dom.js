import { editionDecimal } from "./function.js";

export { toCard };

/**
 * fonction pour afficher les differents articles dans le dom
 * @param {Array} array
 */
function toCard(array) {
  var i = 0;
  return array
    .map(
      (elem) => /*html*/ `<div class="card ${elem[3]}" id="${elem[0]}">
      <div class="image">
        <img src="image/${elem[0]}.jpg" alt="" srcset="" />
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
    </div>
    <span class="page-break"></span>
    <section>
    <header>
            <div class="logo">
              <img src="image/logo_pm.png" alt="" srcset="" />
            </div>
            <p>Valable jusqu'au : <span class="date">31/08/2023</span></p>
            <h1>
              Yo
              <p>Market</p>
            </h1>
          </header>
    </section>
    `
    )
    .join("");
}
