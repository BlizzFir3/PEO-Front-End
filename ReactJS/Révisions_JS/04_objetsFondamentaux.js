const user = { firstName: "John", lastName: "Doe" };
console.log(user);

class Car {
  //   name;
  //   year;

  constructor(name, year) {
    if (name === undefined || year === undefined) {
      throw new Error("Les propriétés 'name' et 'year' sont obligatoires !");
    }
    this.name = name;
    this.year = year;
  }

  display() {
    console.log(`${this.name}, année: ${this.year}`);
  }
}

let car = new Car("Peugeot", 2016);
car.display();
// console.log(car);

// let car2 = new Car();
// car2.display();

console.log(car);

console.log(car.name);

// Pour accéder aux attributs d'un objet, je peux aussi le faire de cette façon la :
console.log(car["name"]);
console.log(car["year"]);

// Exemple pour parcourir les valeurs de tous les attributs d'un objet
let keys = Object.keys(car);
console.log(keys);

keys.forEach((clé) => console.log(car[clé]));

// A NE PAS FAIRE !!
const car2 = car;

console.log("car1", car);
console.log("car2", car2);

car2.name = "Citroen";

console.log("car2", car2);
console.log("car1", car);

// COPIE PROPRE :
const car3 = { ...car };

console.log("car3", car3);
car3.name = "Ford";
console.log("car3", car3);
console.log("car", car);

let car4 = Object.assign({}, car);
console.log("car4", car4);
