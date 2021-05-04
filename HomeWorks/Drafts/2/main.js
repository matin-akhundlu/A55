"use strict";

/* class Car {
    constructor(fuelCapasity, fuelUsage) {
        this.fuelCapasity=fuelCapasity;
        this.fuelUsage=fuelUsage;
        this.currentFuel = 0;
        this.localKm;
        this.globalKm;
    }

    drive(km){
        if (km * this.fuelUsage/100 > this.currentFuel){
            console.log(`${km} it is not possible that to drive the distance with: 
            ${this.currentFuel} .`);
            return;
        }
    this.currentFuel -= km * this.fuelUsage/100;
    this.localKm +=km;
    this.globalKm +=km;

    console.log(`${km} was driven, 
    usage ${km*this.fuelUsage/100}, 
    current fuel is ${this.currentFuel} gallon`);
    }

    addFuel(litr) {
        if (litr + this.currentFuel >= this.fuelCapasity) {
            console.log(`You can not fuel ${litr} gallon. It is full. `);
            return;
        }
    this.currentFuel += litr;
    console.log(`${litr} fuel was added, current fuel is: ${this.currentFuel} gallon `);  
    }

    resetLocalKm() {
        this.localKm = 0;
        console.log("it reset");
    }
} */

class Car {
  constructor(fuelCapasity, fuelUsage) {
    this.fuelCapasity = fuelCapasity;
    this.fuelUsage = fuelUsage;
    this.currentFuel = 0;
    this.localKm;
    this.globalKm;

    this.drive = function (km) {
      if ((km * this.fuelUsage) / 100 > this.currentFuel) {
        console.log(`${km} it is not possible that to drive the distance with: 
            ${this.currentFuel} .`);
        return;
      }
      this.currentFuel -= (km * this.fuelUsage) / 100;
      this.localKm += km;
      this.globalKm += km;

      console.log(`${km} was driven, 
    usage ${(km * this.fuelUsage) / 100}, 
    current fuel is ${this.currentFuel} gallon`);
    };

    this.addFuel = function (litr) {
      if (litr + this.currentFuel >= this.fuelCapasity) {
        console.log(`You can not fuel ${litr} gallon. It is full. `);
        return;
      }
      this.currentFuel += litr;
      console.log(
        `${litr} fuel was added, current fuel is: ${this.currentFuel} gallon `
      );
    };

    this.resetLocalKm = () => {
      this.localKm = 0;
      console.log("it reset");
    };
  }
}

let ford = new Car(55, 13);

ford.addFuel(30);
ford.drive(98);
