// function = delcaration:
// clock() = er navnet på variablene vi har valgt:
// vi legger alt i en function for at tida oppdateres automatisk på nettsiden vår:
function clock() {
  // pink = data type declaration, orange = variable name:
  // new Date() er en innebygd funksjon i JS6 som henter informasjon som tid og dato fra pc-en:
  const fullDate = new Date(); // const=constant, ligner på variabel disse vil ikke forandre seg uansett, mens en variabel vil vi kunne gi ny verdi:
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  var secs = fullDate.getSeconds();
// bruker if her for å sette en null forran talla slik at time/min osv alltid er oppgitt med to siffer: 
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    mins = '0' + minutes;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }
  // document og getEBI referer til html dokumentet:
  // .innerHTML = bytt ut det som står i dokumentet med const hours (som vi etablerte ovenfor):
  document.getElementById('hour').innerHTML =  hours;
  document.getElementById('minute').innerHTML = ':' + minutes;
  document.getElementById('second').innerHTML = ':' + secs;
}
// setInterval er en innebygd egenskap i JS6 som kjører funksjonen:
// i vårt tilfelle er det clock, og talla er gitt i millisekund:
setInterval(clock, 1000);
