let terning = "";
let antall = 0;


function kast() {
  antall++;
  terning = Math.ceil(((Math.random() * 10) + 1) % 6);
  document.getElementById("display").innerHTML = "Terningkast: " + terning + ", " + "Antall kast: " + antall;
}

function reset() {
  document.getElementById("display").innerHTML = "Ok";
  antall = 0;
}

if (document.body.clientWidth < 890) {
  document.getElementById("display").style.fontSize = "23px";
}
