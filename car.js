//There is a car with 50L of petrol.
var petrol = 50;

let carDistance = 0;

let carStep = 0;

//The car has a mileage of 0.5 KM/L.
let milage = 0.5;

//Random Petrol Pumps
var petrolPumps = [];
for (let i = 0; i < 6; i++) {
    var num = Math.floor(Math.random() * 16.6) + 1;
    petrolPumps.push(Number(petrolPumps.slice(-1)) + num);
}
console.log("Random Petrol Pumps Generated at " + petrolPumps);

let move = 1;

//It needs to travel from 0 to 100 KMs.
while (carDistance<=100) {
    //car can move between 0 KM to 6 KM
    carStep = Math.floor(Math.random() * 6) + 1;

    carDistance = carDistance + carStep;
    petrol = petrol - (carStep/milage);

    //Petrol refill 30L if car reach petrol pump exactly
    if(petrolPumps.includes(carDistance)){
        petrol = petrol + 30;
    }

    if (petrol <= 0) {
        console.log("Move: " + move + " distance: " + carDistance + " petrol: 0 game over");
        break;
    } else {
        console.log("Move: " + move + " distance: " + carDistance + " petrol: " + petrol);
    }
    move++;
}
