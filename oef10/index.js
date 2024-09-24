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





/*
* Schrijf een programma dat de BMI (Body Mass Index) van een gebruiker berekent op basis van hun lengte (in meters) en gewicht (in kilogrammen).Formule bmi = gewicht / (lengte * lengte) Het programma moet vervolgens bepalen of de gebruiker ondergewicht, normaal gewicht, overgewicht of obesitas heeft op basis van de BMI-waarden.
·	Ondergewicht: BMI < 18.5
·	Normaal: 18.5 <= BMI < 25
·	Overgewicht: 25 <= BMI < 30
·	Obesitas: BMI >= 30

* */

