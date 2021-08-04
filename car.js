// /There is a car with 50L of petrol.
var petrol = 50; 

//It needs to travel from 0 to 100 KMs.
var distance = 100; 

//The car moves in steps, at each step car can move between 0 KM to 6 KM (generate a random number).
var carStep = Math.floor(Math.random() * 6) + 1;

//The car has a mileage of 0.5 KM/L.
const mileage = 0.5;

//Random Petrol Pumps
var petrolPumps = [];
for (var i = 0; i < 6; i++) {
    var num = Math.floor(Math.random() * 20) + 1;
    petrolPumps.push(Number(petrolPumps.slice(-1)) + num);
}
console.log(petrolPumps);

//Every time the car reaches the petrol pump exactly, the car gets a refill of 30 L.
while(petrol != 0) {
    
} 