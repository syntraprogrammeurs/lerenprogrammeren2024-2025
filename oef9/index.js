/*Maak een programma dat een nummer invoert en controleert of het deelbaar is door 3 en 5, of door geen van beide.*/

let nummer = parseInt(prompt("Geef een nummer in:"));

if(nummer%3===0 && nummer%5===0){
    console.log(`${nummer} is zowel door 3 als 5 deelbaar`);
}else if(nummer%3 === 0){
    console.log(`${nummer} is enkel deelbaar door 3`);
}else if(nummer%5===0){
    console.log(`${nummer} is enkel deelbaar door 5`);
}else{
    console.log(`${nummer} is niet deelbaar door 3 of 5`);
}






