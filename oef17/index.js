/*
for loop
vraag meerdere getallen en stop met een negatief getal
output: de som van de ingegeven getallen
* */

let som = 0;
let getal;

for(;;){
    //vraag aan de gebruiker je getal
    getal = parseInt(prompt("Geef een getal?"));

    //controle negatief getal
    if(getal<0){
        break;
    }
    //tel het getal op bij de som
    som +=getal;
}
console.log(som);

//of

let som = 0;
let getal = 0;

for (getal = parseInt(prompt("Geef een getal in (voer een negatief getal in om te stoppen):")); getal >= 0; getal = parseInt(prompt("Geef een getal in (voer een negatief getal in om te stoppen):"))) {
    som += getal; // Tel het getal op bij de som
}
console.log(som);