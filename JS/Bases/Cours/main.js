/* Variables */

var uneVar = 2;
var uneVar = 3 //Pas d'erreur !

console.log(uneAutreVar)  //undefined

var uneAutreVar ="test var";

console.log(unLet) //Cannot access 'unLet' before initialization
let unLet = 'test let';

const data = `L'histoire de "Bob"`

const histoire = `Nous allons raconter : ${data}`




/*Conditions*/

if (condition) {
    // Fais ceci
} else {
    // Fais cela

let a = 20

if(a == 6){}

if (condition1) {
    // Code à exécuter si condition1 est vraie
  } else if (condition2) {
    // Code à exécuter si condition1 est fausse et condition2 est vraie
  } else if (condition3) {
    // Code à exécuter si condition1 et condition2 sont fausses et condition3 est vraie
  } else {
    // Code à exécuter si toutes les conditions précédentes sont fausses
  }

  const a = 5;
const b = 10;
const c = 7;

if (a > b || a > c) {
  console.log('a is the largest number.');
} else if (b > a && b > c) {
  console.log('b is the largest number.');
} else if (c > a && c > b) {
  console.log('c is the largest number.');
} else {
  console.log('There is a tie between the numbers.');
}


isRainning = false;

if(!isRainning){
    console.log("Sortez vos parapluies")
}


//Switch - case

const day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName); // Affiche 'Tuesday'


//Ternaire

  let test = 2;

 let testUn = test > 4 ? "Bonjour" : "Au revoir";


// typeDeBoucle(condition) {
//     // Traitement (opération(s) à effectuer)
// }

/* Boucle While */

let i = 1; // Initialisation de la variable

while (i <= 5) { // Condition de la boucle
    console.log(i); // Traitement: afficher la valeur actuelle de i
    i++; // Incrémentation de la variable pour éviter une boucle infinie
}

let value = false;

while (value) {
    console.log('Hello');
}

let play = true;

while(play){
    //Instruction

play = prompt("Voulez-vous continuer");
}

for (let index = 0; index < 10; index++) {
    if(index == 8){
        break
    }
    
    console.log("Hello" + index)
}
/* ##################### Tableaux ###################################### */

const monTableau = [1, 2, "hello", true];

let copieTab = monTableau;

monTableau[0] = 152;

console.log("copieTab",copieTab)



console.log(monTableau[0]) // 1
console.log(monTableau[3]) // true

//Tableau multidimentionnel

const tabMulti = [[1,2], ["Pierre", "Anne", ["Marseille", "Nantes"]]]
console.log(tabMulti[0][0]) // 1
console.log(tabMulti[1][2][0]) //Marseille

//Opération sur les tableaux 

//Destructuration
const panierFruits = ['pomme', 'banane', 'orange'];

for (const fruit of panierFruits) {
    

    console.log(fruit)
}

const [a, b, c] = panierFruits;

console.log(b)

// console.log(a);   // pomme
// console.log(second);    // banane
// console.log(troisième); // orange

// const nombres = [1, 2, 3, 4];
// const [premier, , troisième] = nombres;

console.log(premier);   // 1
console.log(troisième); // 3

//Spread Operator

//Copier un tableau

const original = [1, 2, 3];
const copie = [...original];

console.log(copie); // [1, 2, 3]

//Combiner des Tableaux

const fruits = ['pomme', 'banane'];
const légumes = ['carotte', 'brocoli'];
const aliments = [...fruits, ...légumes];

console.log(aliments); // ['pomme', 'banane', 'carotte', 'brocoli']

//Ajouter des éléments 

const listeNombres = [1, 2, 3];
const nouveauxNombres = [...listeNombres, 4, 5, 6];

console.log(nouveauxNombres); // [1, 2, 3, 4, 5, 6]

//Rest Opérator

const [premier, second, ...reste] = [1, 2, 3, 4, 5];

console.log(premier); // 1
console.log(second); // 2
console.log(reste); // [3, 4, 5]

/* ######################### Fonction ########################################## */

function maFonction(){

    console.log("Ma fonction")
}

function addition(nbA, nbB){

        return nbA + nbB
}

const resultat = addition(5,4);
console.log(resultat);

//Paramétre par défault
function paramDefault(nbA, nbB = 5){
    return nbA * nbB
}

const resultatFunctDefault = paramDefault(2);
console.log(resultatFunctDefault)

// Function anonyme :

const anonyme = function (){
    console.log("Je suis une fonction anonyme")
}

//Paramètre 'arguments'
function additionner() {
    let somme = 0;

    // Parcourir tous les arguments passés à la fonction
    for (let i = 0; i < arguments.length; i++) {
        somme += arguments[i];
    }

    return somme;
}

console.log(additionner(1, 2, 3));        // Affiche 6
console.log(additionner(4, 5, 6, 7));     // Affiche 22
console.log(additionner(10, 20, 30, 40)); // Affiche 100

//Rest Opérator 

function saluer(salutation, ...noms) {
    for (let i = 0; i < noms.length; i++) {
        console.log(`${salutation} ${noms[i]}`);
    }
}

saluer('Bonjour', 'Alice', 'Bob', 'Charlie'); 
// Bonjour Alice
// Bonjour Bob
// Bonjour Charlie







/* ##################### SCOPE ################################ */
let globalVar = "Je suis globale";

//LET

function myFunction() {
    // Variable locale
    let localVar = "Je suis locale";
    console.log(localVar); // "Je suis locale"
    
}
myFunction()

if(test){
    var testA
}
 

console.log(globalVar); // "Je suis globale"
console.log(localVar); // ReferenceError: localVar is not defined

// VAR
function exampleVar() {
    console.log(x) //X à pour valeur Undefined, mais elle existe déjà.
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (accessible car portée de fonction)
}
exampleVar();

function exampleLetConst() {
    if (true) {
        let y = 20;
        const z = 30;
    }
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
}
exampleLetConst();


//VARIABLE GLOBALE SANS MOT CLÉ (à ne pas utiliser)
function setGlobalVar() {
    globalVar = "Je suis une variable globale implicite";
}
setGlobalVar()

console.log(globalVar)


const maFct = (arg)=>{
    return true
}
 const maFctDeux = a => a /2;


 function testFct(maFct){
    maFct()
 }

 testFct(maFctDeux)

 function returnFct(){

    return function(){
        return 'Bonjour'
    }
 }

/* ######################### OBJET ##################################### */



const personne = {
    prenom: "Marianne",
    nom: "Cartier",
    salaire: 1500,
    revenu: function(){
        console.log(`Je gagne ${this.salaire}`)
    }
}



personne.salaire = 1000;

console.log(personne.salaire) // Cartier
personne.revenu() //Je gagne 1500€

// THIS
           

const compte ={
    solde : 1500,
    getSolde : function getSolde(){
      console.log(this.solde);
    },
    crediter : function crediter(montant){
      this.solde += montant
    },
    debiter : function debiter(montant, identite){
      this.solde -= montant;
      console.log(`${identite.prenom} ${identite.nom} a été débité  de ${montant} €, il lui reste ${this.solde} € `)
    }
  }

  compte.crediter(100);
  compte.debiter(1000, personne);
  compte.getSolde();

  /* ################### Parcours d'un tobjet #################### */

  //FOR IN

  const personne = {
    nom: 'Dupas',
    age: 30,
    profession: 'Développeur'
};

const personnes = [ {
    nom: 'Dupas',
    age: 30,
    professions: ['Développeur', '"plombier']
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


personnes[0].professions[1]

const autrePersonne = {
    prenom: "Marianne",
    nom: "Cartier",
    salaire: 1500,
    revenu: function(){
        console.log(`Je gagne ${this.salaire}`)
    }
}

for (let cle in autrePersonne) {
    console.log(cle + ': ' + autrePersonne[cle]);
}
// Sortie :
// nom: Dupas
// age: 30
// profession: Développeur

// Object.keys()

const client = {
    nom: 'Dupas',
    age: 30,
    profession: 'Développeur'
};

const cles = Object.keys(client); // ["nom", "prenom", "age"]


cles.forEach(cle => {
    console.log(cle + ': ' + client[cle]);
});
// Sortie :
// nom: Dupas
// age: 30
// profession: Développeur


// Object.values()

const valeurs = Object.values(client); // ["Dupas", 30, "Développeur"]

valeurs.forEach(valeur => {
    console.log(valeur);
});
// Sortie :
// Dupas
// 30
// Développeur

//Object.entries()

const entrees = Object.entries(client);
// [ [ 'nom', 'Dupas' ], [ 'age', 30 ], [ 'profession', 'Développeur' ] ]

console.log(entrees)

Object.entries(obj).forEach(
      ([clé, valeur]) => console.log(`${clé}: ${valeur}`)
    );


// entrees.forEach(([cle, valeur]) => {
//     console.log(cle + ': ' + valeur);
// });
// Sortie :
// nom: Dupas
// age: 30
// profession: Développeur

/* ####### Méthodes Courantes sur les Tableaux en JavaScript ###### */

//SPLICE
const fruits = ["pomme", "banane", "orange"];
fruits.splice(1, 1, "kiwi");
console.log(fruits); 
// Affiche : ["pomme", "kiwi", "orange"]

//POP ET SHIFT
const fruits = ["pomme", "banane", "orange"];
const dernier = fruits.pop();
console.log(dernier); 
// Affiche : "orange"

const premier = fruits.shift();
console.log(premier); 
// Affiche : "pomme"

//PUSH

const fruits = ["pomme", "banane"];
const nouvelleLongueur = fruits.push("orange", "kiwi");
console.log(fruits); 
// Affiche : ["pomme", "banane", "orange", "kiwi"]
console.log(nouvelleLongueur); 
// Affiche : 4



//FOREACH

const nombres = [1, 2, 3, 4];
nombres.forEach((nombre, index, tab ) => {
    console.log(nombre, index);
    console.log(tab)
});
// Affiche : 1, 2, 3, 4

//MAP

const nombres = [1, 2, 3, 4];
const doubles = nombres.map((nombre) => nombre * 2);
console.log(doubles); 
// Affiche : [2, 4, 6, 8]


//FILTER

const nombres = [1, 2, 3, 4, 5];
meubles.filter((meuble) => meuble.nom == select).forEach(elt => console.log(elt))
console.log(pairs); 
// Affiche : [2, 4]

//REDUCE

const nombres = [1, 2, 3, 4];
const somme = nombres.reduce((accumulateur, valeurCourante) =>{ accumulateur.}, []);
console.log(somme); 

const arrayWithDuplicates = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 9];

// Utiliser reduce pour supprimer les doublons
const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // Affiche: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Affiche : 10
//FIND

const prices = [1, 2, 3, 4, 5];
const premierPair = nombres.find((nombre) => nombre > 2);
console.log(premierPair); 
// Affiche : 2

/* #####  Méthodes Courantes de Math ##### */

//MATH.MAX

console.log(Math.max(1, 2, 3, 4)); 
// Affiche : 4

//MATH.MIN

console.log(Math.min(1, 2, 3, 4)); 
// Affiche : 1

//MATH.RANDOM

console.log(Math.random()); 
// Affiche : un nombre aléatoire entre 0 et 1

/* #####  Méthodes Courantes de Date ##### */

//DATE.NOW

console.log(Date.now()); 
// Affiche : le nombre de millisecondes écoulées depuis le 1er janvier 1970

// NEW DATE

const maintenant = new Date();
console.log(maintenant); 
// Affiche : la date et l'heure actuelles

const maintenant = new Date();
console.log(maintenant.toLocaleDateString()); 
// Affiche : la date actuelle dans un format lisible selon les paramètres locaux

/* ###################################################################################
                                        BOM & DOM
#####################################################################################*/
//SETTIMEOUT

setTimeout(fonction, délai);


function direBonjour() {
    console.log('Bonjour!');
}

// Appelle direBonjour après 2000 millisecondes (2 secondes)
const monTimeOutId = setTimeout(direBonjour, 2000);

//Annule le timeout
clearTimeout(monTimeOutId)

//setInterval

setInterval(fonction, intervalle);

function afficherHeure() {
    console.log(new Date().toLocaleTimeString());
}

// Appelle afficherHeure toutes les 1000 millisecondes (1 seconde)
const monIntervalId =  setInterval(afficherHeure, 1000);
//Annule l'interval
clearInterval(monIntervalId)

/********************************************************
                    DOM : élèments
*********************************************************/
//QuerySelector

const selection = document.querySelector("p"); //Prends le premier élément correspondant.

selection.textContent = "Hello";

//En affinant
 //Par classe : //Prends le premier élément du DOM portant cette class (du haut vers le bas de la page).
const selectionPreciseParClasse = document.querySelector(".nomClass");

//element + classe
const selectionPrecise = document.querySelector("h2.article");

//Séléctionne tous les éléments portant cette classe, retourne un tableau (nodes list)
const toutSelectionner = document.querySelectorAll(".article");
console.log(toutSelectionner);

//Selection par l'id
const selectionParId= document.querySelector("#nomId");
//Autres possibilités :

//Par l'id
const selectId = document.getElementById('ancrage');

//Par la classe
const selectClass = document.getElementsByClassName("article");


//Récupération du contenu d'un élément
console.log(selectionPrecise.textContent); //le Dom
//

//Selectionner par l'id :



// /********************************************************
//           DOM : création et suppression d'éléments
// *********************************************************/

// //let selectId = document.getElementById('ancrage');

 /*Création*/
const popup = document.createElement("div");
const texte = document.createElement("p");
texte.innerText = "lorem ipsum"
popup.appendChild(texte);
selectId.appendChild(popup);


const image = document.createElement("img");
console.log(image);
image.src = "../illustrations/console.png";

selectId.insertBefore(image,texte);

// /*innerHTML*/

const carte = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

let insertion = document.getElementById("insert");
insertion.innerHTML = carte;

/* Se déplacer dans le DOM dans le DOM : Next et previous Sibling élément */

const firstParagraph = document.querySelector('#container p');
const nextElement = firstParagraph.nextElementSibling;
console.log(nextElement.textContent); // "Second paragraph"

const thirdParagraph = document.querySelector('#container p:last-of-type');
const previousElement = thirdParagraph.previousElementSibling;
console.log(previousElement.textContent); // "Second paragraph"

// /*suppression*/


//const selectId = document.getElementById('ancrage');
selectId.remove();

// setTimeout(()=>{ //fonction anonyme (et fléchée) (asynchrone)
//   document.body.remove();
// }, 3000);

// /********************************************************
//           DOM : CSS
// *********************************************************/

/*Manipulation direct du CSS*/


selectionPrecise.style.fontSize = "50px"; //https://developer.mozilla.org/en-US/docs/Web/API/Stylesheet
selectionPrecise.style.cssText = "background-color : red; padding-top : 8px; ";

// //
// // /*Ajout et suppression de classes*/
selectionPrecise.classList.add("grandTitre","Accueil");
selectionPrecise.classList.remove("Accueil");

const taille = 180;
let intervalle = setInterval(()=>{ //méthode de Window (asynchrone)
selectionPrecise.style.cssText = `transform: rotate(${360 - taille--}deg)`;
  if(taille % 2 == 0){

    selectionPrecise.style.cssText = `transform: rotate(${360 - taille--}deg); color : red`;
  }else{
    selectionPrecise.style.cssText = "color : blue;";
  }
  if(taille < 0){
    clearInterval(intervalle); //méthode de Window
  }


}, 1000)

/*****************************************************************
 * Résumé : marche à suivre pour travailler sur un élément du DOM *
******************************************************************/

//Séléctionner un élément HTML avec lequel nous souhaitons travailler :(séléction par id "#nomId", class ".nomClass", élément "p", element et classe "p.nomClass") :

const eltSelect = document.querySelector("#nomdeLId");
console.log(eltSelect);

//On peut aisni voir quelle sont les méthode et propriété accessible dans cet objet



/*Travailler sur l'élément : */

//Exemple : pour récupérer le texte éccrit dans le html, on en écrire :
// let texte = eltSelect.innerText;

//pour en ajouter :

eltSelect.innerText = "nouveau texte";

// //Exemple : CSS

eltSelect.style.cssText = "background-color : red; padding-top : 8px; ";

// //Création et insertion d'un nouvel élément :

const nouvelElement = document.createElement("div");

//on peut ajouter du CSS à ce nouvel element

nouvelElement.style.cssText = "background-color : green; width : 500px; height: 500px; border: 10px solid black;";
eltSelect.style.fontSize = "50px";

//Puis l'insérer comme enfant du parent séléctionné

eltSelect.appendChild(nouvelElement);

// //Insérer directement du HTML
// // /*innerHTML*/

const carte = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
const insertion = document.querySelector("#insert");
insertion.innerHTML = carte;

// /********************************************************
//           DOM : EVENEMENTS
// *********************************************************/

/********************************************************
                    DOM : évènements
*********************************************************/
/*Les écouteurs on...*/

function test(){
    console.log("Hello");
  }
  
  /*Les eventListener*/
  
  
  function event(){
    let select = document.querySelector("#iddeLaDiv");
    let nouvelleDiv = document.createElement("div");
    nouvelleDiv.style.cssText = "style cssà écrire"
  }
  
  
  
   function test(data) {
  
    console.log(data);
    let carte = `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.innerText}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    let insertion = document.getElementById("insert");
    insertion.innerHTML = carte;
  }
  
  
  let couleur = document.getElementById("couleur");
  couleur.addEventListener('mouseover', change);
  
  //type d'action + référence à la fonction (sans parenthèse).
  
  function change(){
    couleur.style.cssText = "background-color : red; transform: rotate(45deg);";
    couleur.removeEventListener('mouseover', change); //supression de l'ancien listener
    couleur.addEventListener('mouseout', retour);
  }
  function retour(){
    couleur.style.cssText = "background-color: teal;";
  
    couleur.removeEventListener('mouseout', retour);
  
    couleur.addEventListener('mouseover', change);
  }
  
  //Avec une call back.
  
  couleur.addEventListener('click',()=>{
    alert("Hello !");
  })
  

/************************************************************************************
 *                          APPROFONDISSEMENT                                       *
 ************************************************************************************/

/* ##################################################################################### 
                                            
                                            POO 

  ######################################################################################*/
//Aller plus loin avec les objets

 //OBJECT.ASSIGN()
 
 Object.assign(target, sources);


    //Fusionner des objets

    // const obj1 = { a: 1, b: 2 };
    // const obj2 = { b: 3, c: 4 };

    // const mergedObject = Object.assign({}, obj1, obj2);
    // console.log(mergedObject); // { a: 1, b: 3, c: 4 }

    //Cloner des objet

    // const target = { a: 1, b: 2 };
    // const source = { b: 3, c: 4 };

    // Object.assign(target, source);
    // console.log(target); // { a: 1, b: 3, c: 4 }



    //Modifier des propriétés

    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };

    Object.assign(target, source);
    console.log(target); // { a: 1, b: 3, c: 4 }

    //CHAINES DE CARACTERES

    //Renvoie la caractères à la position spécifiée

    let str = "Hello";
    console.log(str.charAt(0)); // "H"

    //Combine deux ou plusieurs chaînes de caractères et renvoie une nouvelle chaîne.

    let greeting = "Hello".concat(" ", "World");
    console.log(greeting); // "Hello World"

  //Vérifie si la chaîne contient la chaîne spécifiée, à partir de la position donnée.

    console.log(str.includes("ell")); // true
    console.log(str.includes("ell", 1)); // true
    console.log(str.includes("ell", 2)); // false

//Remplace la première occurrence de la chaîne spécifiée par une nouvelle valeur.
    let newStr = str.replace("l", "x");
    console.log(newStr); // "Hexlo"


    //INTERNATIONALISATION

    //Date

    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDateUS = new Intl.DateTimeFormat('en-US', options).format(date);
    console.log(formattedDateUS); // e.g., "December 25, 2023"

    const formattedDateFR = new Intl.DateTimeFormat('fr-FR', options).format(date);
    console.log(formattedDateFR); // e.g., "25 décembre 2023"

    //Monnaie

    const amount = 1234567.89;

    const formattedAmountUS = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    console.log(formattedAmountUS); // "$1,234,567.89"

    const formattedAmountFR = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
    console.log(formattedAmountFR); // "1 234 567,89 €"


    // CLASS

class Personne {
      constructor(nom, prenom, salaire){
        this.nom = nom,
        this.prenom = prenom
        this.salaire = salaire
      }
      revenu(){
        console.log(`Revenu :${this.salaire} `)
      }
    }
    const chantal = new Personne("Dumont", "Chantal", 2000);
    chantal.revenu(); // Revenu :2000
    const bill = new Personne("Gate", "Bill", 1500000000);
    console.log(bill.nom); //Gate


    // GETTER ET SETTER

    class Personne {
        constructor(nom) {
            this._nom = nom;
        }
    
        get nom() {
            return this._nom;
        }
    
        set nom(nouveauNom) {
            if (nouveauNom) {
                this._nom = nouveauNom;
            }
        }
    }
    
    const personne1 = new Personne('Alice');
    console.log(personne1.nom); // Utilise le getter, affiche : Alice
    personne1.nom = 'Bob';      // Utilise le setter
    console.log(personne1.nom); // Utilise le getter, affiche : Bob

    //STATIC

    //Propriété static
    class Compteur {
        static nombreInstances = 0;
    
        constructor() {
            Compteur.nombreInstances++;
        }
    }
    
    const compteur1 = new Compteur();
    const compteur2 = new Compteur();
    
    console.log(Compteur.nombreInstances); 
    // Affiche : 2
    
    //Méthode static

    class MathUtil {
        static ajouter(a, b) {
            return a + b;
        }
    }
    
    console.log(MathUtil.ajouter(5, 3)); 
    // Affiche : 8
    

    // METHODE ET PROPRIETE PRIVÉE

    class Personne {
        #nom; // Propriété privée
    
        constructor(nom) {
            this.#nom = nom;
        }
    
        #afficherNom() { // Méthode privée
            console.log(`Nom : ${this.#nom}`);
        }
    
        saluer() {
            this.#afficherNom(); // Appel de la méthode privée à l'intérieur de la classe
            console.log(`Bonjour, je m'appelle ${this.#nom}`);
        }
    }
    
    const personne1 = new Personne('Alice');
    personne1.saluer(); 
    // Affiche :
    // Nom : Alice
    // Bonjour, je m'appelle Alice
    
    console.log(personne1.#nom); // Erreur : SyntaxError
    personne1.#afficherNom(); // Erreur : SyntaxError
    
    //HERITAGE

class Mammifere {
  constructor(milieu){
    this.milieu = milieu
  }
  allaiter(){
    console.log("Allaite");
  }
  bouge(){
    console.log("Je bouge");
  }
   respire(){
     console.log("Je respire");
   }
}

class Lapin extends Mammifere {
  constructor(milieu, nom){
    super(milieu);
    this.nom = nom
  }
  ronge(){
    console.log("Je ronge")
  }
}

class Vache extends Mammifere {
  constructor(milieu,nom){
    super(milieu);
    this.nom = nom
  }
  rumine(){
    console.log("Je rumine")
  }
}

const rosalie = new Vache("terrestre", "Rosalie");
const jeannot = new Lapin("terrestre", "Jeannot");
rosalie.allaiter();
jeannot.ronge();
rosalie.rumine();
console.log(jeannot.milieu);
console.log(rosalie.milieu);

    //PROTOTYPE

    function Personne(nom) {
        this.nom = nom;
    }
    
    Personne.prototype.saluer = function() {
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    };
    
    const alice = new Personne('Alice');
    alice.saluer(); 
    // Affiche : Bonjour, je m'appelle Alice
    
   

    /* ############################################### 
                        
                       NOTION AVANCEE
    ################################################## */

    /* ITERATEUR */

    const monIterator = {
        current: 1,
        last: 3,
        next() {
            if (this.current <= this.last) {
                return { value: this.current++, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
    
    console.log(monIterator.next()); // { value: 1, done: false }
    console.log(monIterator.next()); // { value: 2, done: false }
    console.log(monIterator.next()); // { value: 3, done: false }
    console.log(monIterator.next()); // { value: undefined, done: true }
    
// GENERATEUR

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
    
}

const numbers = generateNumbers();

console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
console.log(numbers.next()); // { value: 3, done: false }
console.log(numbers.next()); // { value: undefined, done: true }

//Exemple 

class Paginator {
    constructor(apiEndpoint, totalPages) {
        this.apiEndpoint = apiEndpoint;
        this.totalPages = totalPages;
    }

    async fetchPage(page) {
        // Simuler une requête API (remplacer par une vraie requête API)
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: `Data for page ${page}`, page });
            }, 1000);
        });
    }

    async *paginate() {
        for (let currentPage = 1; currentPage <= this.totalPages; currentPage++) {
            const result = await this.fetchPage(currentPage);
            yield result;
        }
    }
}

// Utilisation du générateur de pagination
(async () => {
    const paginator = new Paginator('/api/data', 5);
    for await (const page of paginator.paginate()) {
        console.log(page);
    }
})();

/* #################### Structure de données ################# */


//SET

const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Affiche : Set { 1, 2, 3, 4 }

// Ajout 
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Ignoré, car 2 est déjà dans le Set
console.log(mySet); // Affiche : Set { 1, 2 }

//Delete

mySet.delete(1);
console.log(mySet); // Affiche : Set { 2 }

// Has

console.log(mySet.has(2)); // Affiche : true
console.log(mySet.has(3)); // Affiche : false

// itération

const mySet = new Set([1, 2, 3]);
for (const value of mySet) {
    console.log(value);
}
// Affiche : 1, 2, 3

mySet.forEach(value => {
    console.log(value);
});
// Affiche : 1, 2, 3

//MAP

const myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(myMap); // Affiche : Map { 'key1' => 'value1', 'key2' => 'value2' }

//Ajouter, set

myMap.set('key3', 'value3');
console.log(myMap); 
// Affiche : Map { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

//Obtenir,get

console.log(myMap.get('key1')); 
// Affiche : 'value1'
console.log(myMap.get('key4')); 
// Affiche : undefined

//Est-ce que la valeur existe has

console.log(myMap.has('key2')); 
// Affiche : true
console.log(myMap.has('key4')); 
// Affiche : false

//Delete

myMap.delete('key2');
console.log(myMap); 
// Affiche : Map { 'key1' => 'value1', 'key3' => 'value3' }

//Clear

myMap.clear();
console.log(myMap); 
// Affiche : Map {}

//Iteration sur Map

const myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);


for (const [key, value] of myMap) {             
    console.log(`${key}: ${value}`);
}


myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

/* #################### Asynchrone ################# */

function doAsyncTask(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve('Opération réussie !'); // Appel de resolve en cas de succès
        } else {
          reject('Erreur : Opération échouée'); // Appel de reject en cas d'erreur
        }
      }, 2000); // Simule une tâche asynchrone qui prend 2 secondes
    });
  }
  
  // Utilisation de la promesse
  doAsyncTask(true)
    .then((result) => {
      console.log(result); // Si la promesse est résolue (resolve), ceci sera exécuté
    })
    .catch((error) => {
      console.error(error); // Si la promesse est rejetée (reject), ceci sera exécuté
    });
  
    /*FETCH */
    
    fetchData
        .then(data => {
            console.log(data); // Affiche : Données récupérées
            return 'Traitement des données';
        })
        .then(processedData => {
            console.log(processedData); // Affiche : Traitement des données
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
    

//ASYNC/AWAIT

async function exemple() {
    const promesse = new Promise((resolve) => {
        setTimeout(() => resolve('Résolu'), 1000);
    });

    const résultat = await promesse;
    console.log(résultat); // Affiche "Résolu" après 1 seconde
}

exemple();

//TRY/CATCH

try {
    // Code qui pourrait générer une erreur
} catch (erreur) {
    // Code pour gérer l'erreur
}



async function exempleAvecErreur() {
    try {
        const promesse = new Promise((_, reject) => {
            setTimeout(() => reject('Erreur'), 1000);
        });

        const résultat = await promesse;
        console.log(résultat);
    } catch (erreur) {
        console.log('Erreur attrapée:', erreur); // Affiche "Erreur attrapée: Erreur" après 1 seconde
    }
}

exempleAvecErreur();

// OBJET ERROR

try {
    // Code pouvant générer une erreur
} catch (erreur) {
    console.log(erreur.name);    // Type de l'erreur
    console.log(erreur.message); // Message d'erreur
}

//Exempel de Try/catch

function division(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division par zéro');
        }
        return a / b;
    } catch (erreur) {
        console.log('Erreur:', erreur.message);
        return null;
    }
}

const résultat = division(10, 0);
// Affiche "Erreur: Division par zéro"

//FINALY

function lireFichier() {
    try {
        throw new Error('Erreur de lecture du fichier');
    } catch (erreur) {
        console.log('Erreur attrapée:', erreur.message);
    } finally {
        console.log('Nettoyage des ressources');
    }
}

lireFichier();
// Affiche "Erreur attrapée: Erreur de lecture du fichier"
// Affiche "Nettoyage des ressources"

/* ############################################################## 
                             FETCH
################################################################*/

//GET 

fetch('https://api.exemple.com/donnees')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });



    async function obtenirDonnees() {
        try {
            const response = await fetch('https://api.exemple.com/donnees');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    }
    
    obtenirDonnees();

    //POST

    //then

    fetch('https://api.exemple.com/ajouter', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nom: 'Dupas',
        age: 30
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });


    // async/await

    async function envoyerDonnées() {
        try {
            const response = await fetch('https://api.exemple.com/ajouter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nom: 'Dupas',
                    age: 30
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    }
    
    envoyerDonnées();
    
    //Soumettre un formulaire

    document.getElementById('monFormulaire').addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const nom = document.getElementById('nom').value;
        const age = document.getElementById('age').value;
    
        try {
            const response = await fetch('https://api.exemple.com/ajouter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nom: nom,
                    age: age
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    });
    

    //Envoyer un fichier

    document.getElementById('uploadForm').addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await fetch('https://api.exemple.com/upload', {
                method: 'POST',
                body: formData
            });
    
            const result = await response.json();
            console.log('Fichier envoyé avec succès:', result);
        } catch (error) {
            console.error('Erreur lors de l\'envoi du fichier:', error);
        }
    });
    

    const nb = [1, 2, 3];
    const resultats = nb.map(x => x * 2);
    console.log(resultats);
    
const nbList = [1, 2, 3, 4];
const result = nbList.filter(x => x % 2 === 0);
console.log(result);

/* For await */

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://api.github.com/users/octocat',
    'https://catfact.ninja/fact',
    'http://api.open-notify.org/iss-now.json',
    'https://v2.jokeapi.dev/joke/Any'
  ];
  
  async function fetchAll() {
    let i = 0;
    for await (const url of urls) {
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(`Data ${i}`,data);  // Affiche les données de chaque URL
      i++;
    }
  }
  
  fetchAll();

  //Promise all

  async function fetchMultipleUrls() {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://api.github.com/users/octocat',
      'https://catfact.ninja/fact'
    ];
  
    // Attendre que toutes les promesses soient résolues en parallèle
    const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
  
    console.log(results); // Affiche les données des trois requêtes
  }
  
  fetchMultipleUrls();

  //setTime out
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedLog() {
    console.log('Début');
    await delay(2000);  // Pause de 2 secondes
    console.log('2 secondes plus tard');
  }
  
  delayedLog();
  

  const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString()); // "2024-10-15T12:34:56.789123456"
