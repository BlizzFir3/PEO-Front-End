function Player(name, age) {
  this.name = name;
  this.age = age;
}

let player1 = new Player("Kumar", 31);
let player2 = new Player("Bob", 29);

// Héritage

class Car {
  constructor(name) {
    this.name = name;
  }

  present() {
    return "I have a " + this.name;
  }
}

class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  show() {
    return this.present() + " , it's a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.name);
console.log(myCar.model);
console.log(myCar.present());
console.log(myCar.show());

// Encapulsation

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    return `My name is ${this.#name}. I'm ${this.age} yo`;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge > 17 && newAge < 99 && typeof newAge === "number") {
      this.#age = newAge;
    } else {
      console.error("l'age doit être compris entre 18 et 98 ans !");
      throw new Error("age non correct");
    }
  }
}

const person = new Person("Alice", 25);
console.log(person.name);
person.name = "Alicia";
console.log(person.name);
person.age = 20;
console.log(person.age);

class Ninja extends Person {
  constructor(name, age, speciality) {
    super(name, age);
  }

  hello() {
    return `Hello, my name is ${this.name}. I'm ${this.age} and my speciality is ${this.speciality}`;
  }
}

console.log(person.hello());

const ninja = new Ninja("Naruto", 19, "Ninja");
console.log(ninja.hello());
