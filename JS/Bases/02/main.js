// Exercice 1
console.log('Exercice 1 :');
let number = [1, 2, 3, 4, 5];

for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
}

// Exercice 2
console.log('Exercice 2 :');
let array = [];

array.push(1, 2, 3);
console.log(array);

// Exercice 3
console.log('Exercice 3 :');
array.pop();
console.log(array);

// Exercice 4
console.log('Exercice 4 :');
array = [1, 2, 3];

array.shift();
console.log(array);

// Exercice 5
console.log('Exercice 5 :');
number.splice(1, 2, 6, 7);
console.log(number);

// Exercice 6
console.log('Exercice 6 :');
number = [1, 2, 3, 4, 5];
let result = 0;

for (let index = 0; index < number.length; index++) {
    result += number[index];
}
console.log(result);

// Exercice 7
console.log('Exercice 7 :');
let a, b, rest;
[a, b, ...rest] = number;

console.log(`a = ${a} et b = ${b}`);

// Exercice 8
console.log('Exercice 8 :');
let multiArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 2; j++) {
        console.log(multiArray[index][j]);
    }
}

// Exercice 9
console.log('Exercice 9 :');
let polyArray = [
    ['Bonjour', 'à'],
    ['tous'],
    ['et', ['bienvenue', 'au'], 'cours'],
];

function flattenArray(arr) {
    let result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

let flatArray = flattenArray(polyArray);
console.log(flatArray.join(' '));

// Objet

const personne = {
    prenom      : 'Quentin',
    nom         : 'HERITIER',
    age         : 22,
    salutation  : function () {
        console.log('Bonjour');
    },
};
