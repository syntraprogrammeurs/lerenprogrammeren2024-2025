/*
* Voorbeeld 1: Leeftijdscontrole
In dit voorbeeld wordt gecontroleerd of de gebruiker een volwassene, tiener, of kind is op basis van hun ingevoerde leeftijd.
let leeftijd = prompt('Voer je leeftijd in:');
*
* */
let leeftijd = parseInt(prompt('Voer je leeftijd in:'));

if(leeftijd >= 18 ){
    console.log("Je bent een volwassene");
}else if(leeftijd >=10){
    console.log("Je bent een tiener");
}else{
    console.log("kind");
}
