let container = document.querySelector(".container");
let min = document.getElementById("min");
let max = document.getElementById("max");
let form = document.querySelector("form");

//fonction qui retourne un nombre aleatoire.
function ReturnNumber(minNum, maxNumExclut) {
  let min = parseInt(minNum);
  let max = parseInt(maxNumExclut);
  return Math.floor(Math.random() * (max - min) + min);
}

//fonction qui cree un block 'card'
function createCard() {
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

  num1.textContent = ReturnNumber(min.value, max.value);
  num2.textContent = ReturnNumber(min.value, max.value);
  console.log(num1.textContent, num2.textContent);

  sign.textContent = "+";
  result.textContent = eval(
    parseInt(num1.textContent) + parseInt(num2.textContent)
  );

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
