import { base, dateValable } from "./base.js";
import {
  buttons,
  filtrerBase,
  recherchePartieDansTableau,
  chargementPage,
} from "./function.js";
import { toCard } from "./dom.js";

const cards = document.querySelector(".cards");
const rayon = document.querySelector(".active-btn").id;
const inputRecherche = document.getElementById("inputText");
const baliseDatevalidation = document.querySelector("header p .date");

chargementPage(
  base,
  cards,
  rayon,
  inputRecherche,
  baliseDatevalidation,
  dateValable
);

// let nouvelleBase = filtrerBase(base, document.querySelector(".active-btn").id);
// cards.innerHTML = toCard(nouvelleBase);
//inputText.setAttribute("placeholder", `Rechercher dans ${e.target.id}`);

// buttons(base, cards);
buttons(base, dateValable);

//la recherche sur l input
inputText.addEventListener("input", (e) => {
  const rayon = document.querySelector(".active-btn").id;
  cards.innerHTML = toCard(
    recherchePartieDansTableau(filtrerBase(base, rayon), e.target.value)
  );
});
