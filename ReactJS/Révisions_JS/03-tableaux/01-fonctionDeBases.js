let myArray = [];
let myNames = ['Riri', 'Fifi', 'Loulou'];

let myArray2 = new Array(5);

console.log(myArray, myNames, myArray2);

// Ajout d'un élément
myArray.push('Toto');
myNames.push('Toto');
myArray2.push('Toto');

console.log(myArray, myNames, myArray2);

// Suppresion d'éléments<
// .splice() => prend en paramètre 2 paramètres
// - le 1er = index du 1er l'élément à supprimer
// - le 2e = le nombre d'élément à supprimer
myNames.splice(1, 1);
console.log(myArray, myNames, myArray2);
