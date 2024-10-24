console.log("Hello world !")

let maVar = 123;
maVar = "test"

const PI = 3.14


let a = 1, b=3, c =8

let salutation = "Bonjour ";
let nom = "Bob"

let nbA = 12;
let nbB = 5;
nbA *= nbB;



console.log("Bienvenue " + nom)

const userName = `L'acteur dit ${salutation}`

let number = 7;
let numberDeux = "2"

console.log("Resultat", number + numberDeux)

let add = 2 + 3

let addDeux = 2 + number
let soustraction = 12 - 5;
let multiplication = 5 * 2
let division = 2/5
let modulo = 5%2;
let puissance = 2**8

let resulat = addDeux + puissance;


let test = "2"
let testA = +test
console.log("Type de testA", typeof testA)

//condition et boucles

let i = 12
let b = 5;

if(i > 12 || b < 4) 
{
    let hello = true
    console.log("variabéle déclarée")
}else if(i > 3){

}

else{

    console.log("Variable non déclarée")
}

let u = 8


console.log(12 != "12")

let o = false

if(!o){

}

//Boucles

let isOpen = true

while(isOpen){

    console.log("répétition")

    if(a > b){
        isOpen = false;
    }
}

for (let index = 0; index < 6; index++) {
   
}

const user = "Bertrand"
const date = "21/10/24"

const text = `Bonjour ${user}, nous sommes le ${date}`


//Objet

const personne = {
    prenom: "Maud",
    nom: "Dusfour",
    salaire: 1500,
    salutation: function(){
        console.log("Bonjour")
    },
    revenu : function (salutation){
        console.log(`${salutation},Je gagne ${this.salaire} €`)
    }

}

console.log(personne.salaire)
personne.salaire = 2000

personne.revenu("Bonjour")

function mutation(obj, prop, valeur){

    obj[prop]= valeur;

}

mutation(personne, "salaire", "Durang")


const users = [ {
    nom: 'Dupas',
    age: 30,
    professions: ['Développeur', 'plombier'],
    livres: [{titre:"Cent ans de solitude" , auteur:"GG, Marquez"},]
},
{
    nom: 'Durang',
    age: 30,
    professions: ['Développeur']
},
{
    nom: 'Dutour',
    age: 30,
    professions: ['Développeur']
}

]

const nomDeuxiemeUtilisateur = users[1].nom
const professionPremierUtilisateur = users[0].professions[1]


const client = {
    prenom: "Maud",
    nom: "Dusfour",
    adresse : "12 rue ...",
    ville: "Lyon"

}

// for (const key in client) {
//     console.log(key + ' : ' + client[key])
// }

//Autre méthode

//const valeurs = Object.values(client)

// console.log(valeurs)


// valeurs.forEach(valeur => {
//     console.log(valeur);
// });

const entrees = Object.entries(client)
console.log(entrees)

Object.entries(client).forEach(([cle, valeur])=>{
    console.log(`${cle} : ${valeur}`)
});

//Exemple, pourquoi [cle, valeur] ?
const monTab = ["a", "b", "c", "d"]

const [valueA, valueB] = monTab



const nombres = [1,2,3,4]

// numbers.forEach((nb, index, tab)=>{
//         console.log(nb, index);
//         console.log(tab)
// })

const doubles = nombres.map(nombre => nombre * 2)
console.log(doubles)

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];


const productsWithTax = products.map(product =>({

    ...product,
    tax: product.price * 0.20

}))

console.log(productsWithTax)

// [
//   { name: 'Laptop', price: 1000, tax: 200 },
//   { name: 'Phone', price: 500, tax: 100 },
//   { name: 'Tablet', price: 300, tax: 60 }
// ]


const customers = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 }
];

const adults = customers.filter(customer => customer.age > 18).forEach(customer => {
    console.log(customer.name)
})


const prices = [1, 2, 3, 4, 5];
// const premierPair = prices.find((price) => price > 2);
// console.log(premierPair); 
// Affiche : 2

const sum = prices.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)


const arrayWithDuplicates = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 9];

const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue)=>{
    if(!accumulator.includes(currentValue)){
            accumulator.push(currentValue)
    }
    return accumulator

}, [])

// Date

const maintenant = new Date();
console.log(maintenant)

console.log(Date.now())

//Math

console.log(Math.random())

console.log(Math.max(1, 2, 3, 4)); 

console.log(Math.min(1, 2, 3, 4)); 