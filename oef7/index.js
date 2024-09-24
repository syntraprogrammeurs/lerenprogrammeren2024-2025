/*
Schrijf een programma dat de gebruiker een getal laat invoeren en controleert of het even of oneven is.

* */

let getal = parseInt(prompt("Geef een getal in?"));
if(getal %2 == 0){
    console.log("even getal");
}else{
    console.log("oneven getal");
}