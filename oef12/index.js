/*ITERATIES
*
* for loop
* */

// for(startwaarde;conditie;startwaarde manipuleren){
//
// }
/*let eindGetal = parseInt(prompt("geef een eindgetal in:"));
let i = 1;
for(i;i<eindGetal;i+=2){
    console.log(`dit is nummer ${i}`);
}*/
/*let i = parseInt(prompt("geef een eindgetal in:"));
//let i = 10;
for(i;i > 0;i--){
    console.log(`dit is nummer ${i}`);
}*/

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//output: tafel van 1
//1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4


// let tafel = parseInt(prompt("Wat is de tafel:")); // 1
// let eindGetal = parseInt(prompt("Geef het eindgetal:")); //5
// // 1 x 5 = 5
// for(let i=1;i<=eindGetal;i++){
//     console.log(`${tafel} x ${i} =`,tafel*i);
// }


//Schrijf een programma dat het gemiddelde van de getallen van 1 tot en met 10 berekent.
//i
// som
//resultaat
// 1 +2 + 3 + 4 + 5 + 6 + 7 + 8+ 9 + 10 = 55 / 10 = 5.5

// let i = 1;
// let som = 0;
// let resultaat = 0;
//
// let eindGetal = parseInt(prompt("eindgetal?"));
//
// for(i;i<=eindGetal;i++){
//     som = som + i;
// }
// resultaat = som / eindGetal;
// console.log(resultaat);


let hoeveelGetallen = parseInt(prompt("hoeveel getallen wens je in te geven?"));
let getal;
let som=0;

for(let i = 1; i<=hoeveelGetallen;i++){
    getal = parseInt(prompt(`Geef getal ${i} in:`));
    som = som +getal;
}
console.log(som);