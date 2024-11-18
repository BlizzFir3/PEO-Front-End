const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// SPREAD OPERATOR
let test = [...numbersOne];

console.log(test);

let numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// DESTRUCTURATION
const cars = ["mustang", "f-150", "expedition"];

const [car1, car2, car3] = cars;

// Equivalent :
// const car1 = cars[0];
// const car2 = cars[1];
// const car3 = cars[2];

console.log("car1: ", car1);
console.log("car2: ", car2);
console.log("car3: ", car3);

const [car5, car6, car7] = cars;
console.log("car5: ", car5);
console.log("car6: ", car6);
console.log("car7: ", car7);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(rest);

const calculate = (a, b) => {
  const add = a + b;
  const substract = a - b;
  const divide = a / b;
  const multiply = a * b;

  return [add, substract, divide, multiply];
};

const [add, substract] = calculate(8, 2);

console.log("Add: ", add);
console.log("substract: ", substract);

const [, , , multiply] = calculate(8, 2);

// Spread operator
const person = { name: "Doe", age: 30, city: "New York" };
const information = { numberPhone: "0615632156", firstName: "John" };

const personAndInformation = {
  ...person,
  ...information,
  test: "test",
  age: 45,
};
console.log("personAndInformation", personAndInformation);

// Destructuration sur ls objets

const { city, name, age } = person;
console.log(name, age, city);

const { city: ville, name: nom, age: âge } = person;
console.log(nom, âge, ville);

const calculate2 = (a, b) => {
  const add = () => a + b;
  const substract = () => a - b;
  const divide = () => a / b;
  const multiply = () => a * b;

  return { add, substract, divide, multiply };
};

const { multiply: multiplyWithObject } = calculate2(8, 2);
console.log(multiply);

const personInfo = ({ name, age }) => {
  console.log("info de la personne : " + name + " " + age);
};

personInfo(person);
