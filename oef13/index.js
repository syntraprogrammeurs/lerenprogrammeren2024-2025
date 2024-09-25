/*
*
* hoeveel getallen? 3
* geef getal 1 in
* ...
*
*geef getal 3 in
*
* OUtput: De totale som van x getallen is x
* */

//hier stel ik een vraag via de popup met prompt aan de gebruiker.
let hoeveelGetallen = parseInt(prompt("Hoeveel getallen?"));

let getal;
let i=1;
let som = 0;
//
for(i;i<=hoeveelGetallen;i++){
    getal = parseInt(prompt(`Geef getal ${i} in`));
    som = som + getal;
}
console.log(`De totale som van ${hoeveelGetallen} getallen is ${som}`);


