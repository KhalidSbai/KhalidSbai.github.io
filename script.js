import { base } from "./base.js";
import {
  buttons,
  filtrerBase,
  recherchePartieDansTableau,
  chargementPage,
} from "./function.js";
import { toCard } from "./dom.js";

const cards = document.querySelector(".cards");

chargementPage(
  base,
  document.querySelector(".cards"),
  document.querySelector(".active-btn").id,
  document.getElementById("inputText")
);

// let nouvelleBase = filtrerBase(base, document.querySelector(".active-btn").id);
// cards.innerHTML = toCard(nouvelleBase);
//inputText.setAttribute("placeholder", `Rechercher dans ${e.target.id}`);

// buttons(base, cards);
buttons(base);

//la recherche sur l input
inputText.addEventListener("input", (e) => {
  const rayon = document.querySelector(".active-btn").id;
  cards.innerHTML = toCard(
    recherchePartieDansTableau(filtrerBase(base, rayon), e.target.value)
  );
});
