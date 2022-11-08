let inventaire = [
  {
    platte: "1",
    code: "61112146321245",
    qteinv: 4520,
    codeart: "1254",
    designation: "MOUCHOIRS TAJF ",
  },
  {
    platte: "54",
    code: "61112146321245",
    qteinv: 1200,
    codeart: "1254",
    designation: "MOUCHOIRS TAJF ",
  },
  {
    platte: "41",
    code: "61112146321241",
    qteinv: 1200,
    codeart: "44",
    designation: "TIDE 350GR",
  },
];

// affichage tableau dans la pgae
let tbody = document.querySelector("tbody");
let contenu = "";
function remplirTableau() {
  inventaire.forEach((el) => {
    contenu += `<tr>
        <td class="palette">${el.platte}</td>
        <td class="code">${el.code}</td>
        <td class="qteinv">${el.qteinv}</td>
        <td class="codeart">${el.codeart}</td>
        <td class="designation">${el.designation}</td>
        </tr>`;
  });
  tbody.innerHTML = contenu;
}
remplirTableau();

//search

let searchInputPalette = document.querySelector("input#palette");
let searchInputCode = document.querySelector("input#code");
let searchInputCodeArt = document.querySelector("input#codeart");
let searchInputDesignation = document.querySelector("input#designation");

searchInputPalette.addEventListener("keyup", () => {
  recherche(searchInputPalette, "palette");
});
searchInputCode.addEventListener("keyup", () => {
  recherche(searchInputCode, "code");
});
searchInputCodeArt.addEventListener("keyup", () => {
  recherche(searchInputCodeArt, "codeart");
});

searchInputDesignation.addEventListener("keyup", () => {
  recherche(searchInputDesignation, "designation");
});

// function recherche
function recherche(searchInput, inputclass) {
  let filter = searchInput.value.toUpperCase();
  let allTr = document.querySelectorAll("tbody tr");
  let allTd = document.querySelectorAll(`tbody tr td.${inputclass}`);
  let txtSearch;

  for (let i = 0; i < allTr.length; i++) {
    txtSearch = allTd[i].innerText;
    if (txtSearch.toUpperCase().indexOf(filter) > -1) {
      allTr[i].style.display = "table-row";
    } else {
      allTr[i].style.display = "none";
    }
  }
}

//button : vider les champs
let input = document.querySelectorAll("input");
let button = document.querySelector("button");
button.addEventListener("click", () => {
  input.forEach((item) => {
    item.value = "";
  });
});
