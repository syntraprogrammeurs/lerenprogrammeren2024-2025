/*
*Maak een programma dat drie cijfers van een gebruiker accepteert en het grootste van de drie weergeeft.
* De 3 variabelen mogen gewoon gedeclareerd worden. Bijv. Let nummer1=10, nummer2=5,...
* */

let nummer1 =15, nummer2 = 25, nummer3 = 5;

if(nummer1 >= nummer2 && nummer1 >= nummer3){
    console.log(`${nummer1} is de grootste`)
}else if(nummer2 >= nummer1 && nummer2>= nummer3){
    console.log(`${nummer2} is de grootste`)
}else{
    console.log(`${nummer3} is de grootste`)
}

