const container = document.querySelector(".container");
const min = document.getElementById("min");
const max = document.getElementById("max");
const form = document.querySelector("form");
const sb = document.querySelector("#operation");

//fonction qui retourne un nombre aleatoire.
function ReturnNumber(minNum, maxNumExclut) {
  let min = parseInt(minNum);
  let max = parseInt(maxNumExclut) + 1;
  return Math.floor(Math.random() * (max - min) + min);
}

//fonction qui cree un block 'card'
function createCard() {
  //creation des balises
  let card = document.createElement("div");
  card.classList.add("card");
  let operation = document.createElement("div");
  operation.classList.add("operation");
  let num1 = document.createElement("div");
  num1.classList.add("num1");
  let sign = document.createElement("div");
  sign.classList.add("sign");
  let num2 = document.createElement("div");
  num2.classList.add("num2");
  let result = document.createElement("div");
  result.classList.add("result");

  //prendre les valeurs de la page html
  sign.textContent = sb.value;
  num1.textContent = ReturnNumber(min.value, max.value);
  num2.textContent = ReturnNumber(min.value, max.value);

  //en cas de soustracation, verifier si le deuxieme nombre est inferieur au premier
  if (sign.textContent == "-") {
    while (num2.textContent > num1.textContent) {
      num2.textContent = ReturnNumber(min.value, max.value);
    }
  }

  //calculer le resultat
  result.textContent = eval(
    parseInt(num1.textContent) + sign.textContent + parseInt(num2.textContent)
  );

  //ajouter le tout dans la balise "container"
  operation.appendChild(num1);
  operation.appendChild(sign);
  operation.appendChild(num2);
  card.appendChild(operation);
  card.appendChild(result);
  container.appendChild(card);
}

//declancher aprés la validation du forumlaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.textContent = "";
  for (let i = 0; i < 9; i++) {
    createCard();
  }
});
