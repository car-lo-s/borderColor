// let respR = document.querySelector("#respostaR");
// let respG = document.querySelector("#respostaG");
// let respB = document.querySelector("#respostaB");
let r = document.querySelector("#red");
let g = document.querySelector("#green");
let b = document.querySelector("#blue");
let resposta = document.querySelector(".resultado");
let cor = new Array();
let cod = document.querySelector(".codigo");


r.onchange = function () {
  // respR.innerHTML = r.value
  cor[0] = r.value;
  resposta.style.backgroundColor =
    "rgb(" + cor[0] + "," + g.value + "," + b.value + ")";
  cod.innerHTML = "" + cor[0] + "," + g.value + "," + b.value + "";
};
g.onchange = function () {
  // respG.innerHTML = g.value
  cor[1] = g.value;
  resposta.style.backgroundColor =
    "rgb(" + r.value + "," + cor[1] + "," + b.value + ")";
  cod.innerHTML = "" + cor[0] + "," + g.value + "," + b.value + "";
};
b.onchange = function () {
  // respB.innerHTML = b.value
  cor[2] = b.value;
  resposta.style.backgroundColor =
    "rgb(" + r.value + "," + g.value + "," + cor[2] + ")";
  cod.innerHTML = "" + cor[0] + "," + g.value + "," + b.value + "";
};

