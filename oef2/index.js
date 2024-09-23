// let, var, const
// let blockscope, var universeel, const is een vaste waarde

//DATATYPES
let getal = 5; //de output zal dus een NUMBER
let tekst = "Tom";
let keuze= 1; // 1 = true, 0 = false //BOOLEAN!!

let strNum = "123";
strNum = parseInt(strNum); //kommagetallen = parseFloat

let strNum1= "123";
strNum1 = parseInt(strNum1);

var resultaat = strNum+strNum1;
console.log(typeof(resultaat));

let person = {
    name:"Jane",
    age:30,
    isStudent: false,
    haarkleur: "bruin"
}

console.log(typeof(person));
console.log(person.name);

let familieNaam = "Vanhoutte";
let geboorteJaar = 1974;
let huidigJaar = 2024;
var resultaat = huidigJaar -geboorteJaar;
console.log(resultaat);

//het resultaat van Vanhoutte is 50 jaar.

// het resultaat van famielieNaam is 50 jaar.

//het resultaat van familieNaam is resultaat.

//ES5 Notatie
console.log("het resultaat van" , familieNaam , "is" , resultaat);
//ES6 Notatie (backtick operator)
console.log(`het resultaat ${familieNaam} van is ${resultaat}`);

//3 + 2 = 5
let getal1 = parseInt(prompt("Voer je eerste getal in"));
let getal2= parseInt(prompt("Voer je tweede getal in"));

console.log(getal1+getal2); //5
console.log(getal1*getal2); //6

console.log(getal1,"+",getal2,"=",getal1+getal2); //ES5
console.log(`${getal1} + ${getal2} = ${getal1+getal2}`); //ES6
console.log(`${getal1} * ${getal2} = ${getal1*getal2}`); //ES6
console.log(`${getal1} / ${getal2} = ${getal1/getal2}`); //ES6
console.log(`${getal1} - ${getal2} = ${getal1-getal2}`); //ES6
console.log(`${getal1} % ${getal2} = ${getal1%getal2}`);
console.log(`${getal1} ** ${getal2} = ${getal1**getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1-getal2}`);

let getal5 = 5;

//getal5 = getal5 + 1 ;
getal5-=1;//shorthandnotatie

console.log(getal5);

console.log(5=="5");//true
console.log(5==="5");//false


