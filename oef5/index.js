/*
* Voorbeeld 2: Beroep op basis van gebruikersinvoer
De gebruiker wordt gevraagd hun naam en beroep in te voeren. Afhankelijk van de invoer toont het programma een aangepast bericht.
Dit is een voorbeeld van een if - else if - else structuur waarin meerdere condities worden gecontroleerd
*
let naam = prompt('Geef uw naam in:');
let beroep = prompt('Geef uw beroep in, maak een keuze: bediende, arbeider, werkzoekend');

* */
let naam = prompt('Geef uw naam in:');
let beroep = prompt('Geef uw beroep in, maak een keuze: bediende, arbeider,ambtenaar, werkzoekend');

if(beroep === "arbeider"){
    console.log(`Uw naam is ${naam} en uw beroep is ${beroep}`);
}else if(beroep === "bediende"){
    console.log("bediende");
}else if(beroep === "ambtenaar"){
    console.log("ambtenaar");
}
else{
    console.log("werkzoekende!");
}
