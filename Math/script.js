let container = document.querySelector(".container");

// let num1 = document.querySelector(".num1");
// let num2 = document.querySelector(".num2");
// let result = document.querySelector(".result");
let MaxNumNonInclut = 100;
let MinNum = 1;
let ReturnNumber = () =>
  Math.floor(Math.random() * (MaxNumNonInclut - MinNum) + MinNum);

for (let i = 0; i < 9; i++) {
  // create element 'card' and chidren
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

  num1.textContent = ReturnNumber();
  num2.textContent = ReturnNumber();
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
