/*
* Schrijf een programma dat de BMI (Body Mass Index) van een gebruiker berekent op basis van hun lengte (in meters) en gewicht (in kilogrammen).Formule bmi = gewicht / (lengte * lengte) Het programma moet vervolgens bepalen of de gebruiker ondergewicht, normaal gewicht, overgewicht of obesitas heeft op basis van de BMI-waarden.
·	Ondergewicht: BMI < 18.5
·	Normaal: 18.5 <= BMI < 25
·	Overgewicht: 25 <= BMI < 30
·	Obesitas: BMI >= 30

* */
let gewicht = parseFloat(prompt("Geef uw gewicht in"));
let lengte = parseFloat(prompt("Geef uw lengte in (m)"));
let bmi = gewicht / (lengte * lengte)

if(bmi < 18.5){
    console.log(`Ondergewicht (BMI:${bmi.toFixed(2)})`)
}else if (bmi >= 18.5 && bmi < 25) {
    console.log(`Normaal gewicht (BMI: ${bmi.toFixed(2)})`);
} else if (bmi >= 25 && bmi < 30) {
    console.log(`Overgewicht (BMI: ${bmi.toFixed(2)})`);
} else {
    console.log(`Obesitas (BMI: ${bmi.toFixed(2)})`);
}


