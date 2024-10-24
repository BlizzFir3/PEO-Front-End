// Exercice 1
console.log('Exercice 1 :');
let personne = {
    nom: 'Alice',
    age: 25,
};
console.log(personne);

//* --------------------------------------------------------------------------------

// Exercice 2
console.log('Exercice 2 :');
console.log(personne.nom);
console.log(personne.age);

//* --------------------------------------------------------------------------------

// Exercice 3
console.log('Exercice 3 :');
personne = {
    ...personne,
    saluer: function () {
        console.log(`bonjour, je m'appelle ${this.nom}`);
    },
};
personne.saluer();

//* --------------------------------------------------------------------------------

// Exercice 4
console.log('Exercice 4 :');
let voiture = {
    marque: 'Mercedes',
    modele: 'Classe E',
    annee: 2015,
};
for (const key in voiture) {
    console.log(key + ' : ' + voiture[key]);
}

//* --------------------------------------------------------------------------------

// Exercice 5
console.log('Exercice 5 :');
let livre = {
    titre: "L'homme révolté",
    auteur: 'Albert Camus',
    pages: 300,
};
for (const key in livre) {
    console.log(key);
}

//* --------------------------------------------------------------------------------

// Exercice 6
console.log('Exercice 6 :');
Object.values(livre).forEach((valeur) => {
    console.log(valeur);
});

//* --------------------------------------------------------------------------------

// Exercice 7
console.log('Exercice 7 :');
for (const key in livre) {
    console.log(key + ' : ' + livre[key]);
}

//* --------------------------------------------------------------------------------

// Exercice 8
console.log('Exercice 8 :');
delete personne.age;
console.log(personne);

//* --------------------------------------------------------------------------------

// Exercice 9
console.log('Exercice 9 :');
let personnes = [
    { nom: 'Damien', age: 23 },
    { nom: 'Laurianne', age: 56 },
    { nom: 'Renaud', age: 34 },
];
const noms = personnes.map((personne) => personne.nom);
console.log(noms);
const trentePlus = personnes.filter((personne) => personne.age > 30);
console.log(trentePlus);

//* --------------------------------------------------------------------------------

// Exercice 10
console.log('Exercice 10 :');
let nb = [1, 2, 3, 4, 5];
let somme = nb.reduce((cumulator, currentValue) => cumulator + currentValue, 0);
console.log(somme);
somme /= nb.length;
console.log(somme);

//* --------------------------------------------------------------------------------

// Exercice 11
console.log('Exercice 11 :');
let fruit = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let nbFruit = fruit.reduce(
    (accumulator, currentValue) => {
        let fruitExiste = accumulator.find((item) => item.nom === currentValue);
        if (fruitExiste) {
            fruitExiste.quantité++;
        } else {
            accumulator.push({ nom: currentValue, quantité: 1 });
        }
        return accumulator;
    },
    [{}]
);
console.log(nbFruit);

//* --------------------------------------------------------------------------------

// Exercice 12
console.log('Exercice 12 :');
