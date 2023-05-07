const number = document.querySelector(".number");
const designation = document.querySelector(".designation");
const quantite = document.querySelector(".quantite");
const buttonRight = document.querySelector(".buttonright");
const buttonLeft = document.querySelector(".buttonleft");
const indexPage = document.querySelector(".indexPage");
let tableau = [];
let index = 1;
window.onload = () => {
  // FILE READER + HTML ELEMENTS
  const reader = new FileReader(),
    picker = document.querySelector("input");

  // READ CSV ON FILE PICK
  picker.onchange = () => {
    index = 1;
    tableau = [];
    reader.readAsText(picker.files[0]);
  };

  // READ THE CSV FILE 1 GENERATE HTML
  reader.onloadend = () => {
    // ENTIRE CSV FILE
    let csv = reader.result;

    // SPLIT INTO ROWS
    let rows = csv.split("\r\n");

    // LOOP THROUGH ROWS + SPLIT COLUMNS
    for (const row of rows) {
      let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
      if (cols != null) {
        let col = cols[0].split(";");
        console.log(col);
        tableau.push(col);
      }
    }
    console.log(tableau[0]);
    actualiser(index);
    indexPage.style.visibility = "visible";

    buttonRight.addEventListener("click", () => {
      index = index === tableau.length - 1 ? tableau.length - 2 : index;
      actualiser(index, 1);
    });
    buttonLeft.addEventListener("click", () => {
      index = index === 1 ? 2 : index;
      actualiser(index, -1);
    });
  };
};

function actualiser(ind, ajouter = 0) {
  //   if (ind > 0 && ind < tableau.length - 1) {
  console.log(
    `avant index : ${index}`,
    `ind : ${ind}`,
    `taille tableau : ${tableau.length}`
  );
  index = ind = ind + ajouter;

  console.log(tableau[ind][0], tableau[ind][1], tableau[ind][2]);
  number.innerText = `(${tableau[ind][0]})`;
  designation.innerText = tableau[ind][1];
  quantite.innerText = tableau[ind][2];
  indexPage.innerText = `${index}/${tableau.length - 1}`;
  console.log(
    `if index : ${ind}`,
    `ind : ${ind}`,
    `taille tableau : ${tableau.length}`
  );
}
