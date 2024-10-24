//     console.log("Hello World !");

//     let maVar = 123;
//     console.log(maVar);
//     maVar = "test";
//     console.log(maVar);

//     const PI = 3.14;

//     let a = 1, b = 3, c = 8;

//     let salutation = "Bonjour ";
//     let nom = "Bob";
//     let phrase = salutation + nom;
//     salutation += nom;

//     let nbA = 12, nbB = 5;
//     nbA += nbB;

//     console.log(salutation)

//     const userName = `L'acteur dit ${salutation}`;

//     console.log(userName);

//     let number = 7;
//     let numberDeux = "2";

//     console.log("Résultat", number + numberDeux);

//     let add = 2 + 3;
//     let addDeux = 2 + number;
//     let soustraction = 12 - 5;
//     let multiplication = 5 * 2;
//     let division = 2 / 5;
//     let modulo = 5 % 2;
//     let puissance = 2 ** 8;

//     let resultat = addDeux + puissance;

//  Conditions et boucles

// let i = 12;
// let e = 5;

// if (i > 12 || e < 5) {
//         let hello = true;
//         console.log("Variable déclarée");
//     } else if (i > 3) {
//         let oui = "oui";
//     } else {
//         console.log("Variable non déclarée");
//     }

// let isValid = true;

// displayText = i === 12 ? "Vrai" : "Faux";

// console.log(displayText);


// Exercice 1
console.log("Exercice 1");
for (let index = 1; index <= 5; index++) {
    console.log(index);
}

// Exercice 2

console.log("Exercice 2");
index = 1;

while (index <= 5) {
    console.log(index);
    index ++;
}

// Exercice 3
console.log("Exercice 3");
let result = 0;
for (let index = 0; index <= 10; index++) {
    result += index;
}
console.log(result);

// Exercice 4
console.log("Exercice 4");
index = 1;
while (index <= 10) {
    if (index % 2 === 0) {
        console.log(index);
    }
    index++;
}

// Exercice 5
console.log("Exercice 5");
for (let index = 10; index > 0; index--) {
    console.log(index);
}

// Exercice 6
console.log("Exercice 6")
result = 0;
for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        result += index;
    }
}
console.log(result)

// Exercicce 7
console.log("Exercice 7");
let multiTrois = 0;
for (let index = 1; index <= 10; index++) {
    multiTrois = 3 * index;
    console.log(`3 x ${index} = ${multiTrois}`);
}