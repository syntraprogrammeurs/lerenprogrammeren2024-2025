/*
* Oefening 3: (tip: maak gebruik van de logische operatoren)
* Schrijf een programma dat controleert of een gegeven jaar een schrikkeljaar is.
*
* (Een jaar is een schrikkeljaar als het (deelbaar is door 4, maar dit jaar is niet door 100 deelbaar), behalve als het deelbaar is door 400.)

* */
let jaar = parseInt(prompt('Geef een schrikkeljaar')); //2024

//testen van mijn logica
if ((jaar%4 === 0 && jaar%100 !== 0) || (jaar % 400 === 0)){
    console.log(`${jaar} is een schrikkeljaar`);
}else{
    console.log(`${jaar} is geen schrikkeljaar`);
}