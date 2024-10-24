// Exercice 1
console.log('Exercice 1 :');
let monBouton = document.querySelector('#monBouton');
monBouton.addEventListener('click', (evt) => {
    window.alert('bouton cliqué !');
});

// Exercice 2
console.log('Exercice 2 :');
let monParagraphe = document.querySelector('#monParagraphe');
monParagraphe.addEventListener('mouseover', (evt) => {
    monParagraphe.textContent = 'survolé !';
});
monParagraphe.addEventListener('mouseout', (evt) => {
    monParagraphe.textContent =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus, ratione autem nam veniam';
});

// Exercice 3
console.log('Exercice 3 :');
let monFormulaire = document.querySelector('#monFormulaire');
let monInput = document.querySelector('#monInput');
monFormulaire.addEventListener('submit', (evt) => {
    event.preventDefault();
    console.log(monInput.value);
    monInput.value = '';
});

// Exercice 4
console.log('Exercice 4 :');
let ajouterElement = document.querySelector('#ajouterElement');
ajouterElement.addEventListener('click', (evt) => {
    let nouvelElement = document.createElement('p');
    nouvelElement.textContent = 'nouvel élément';
    ajouterElement.insertAdjacentElement('afterend', nouvelElement);
});

// Exercice 5
console.log('Exercice 5 :');
let compteurBouton = document.querySelector('#compteurBouton');
let compteurSpan = document.querySelector('#compteur');
let indexCompteur = 0;
compteurBouton.addEventListener('click', (evt) => {
    indexCompteur++;
    compteurSpan.textContent = indexCompteur;
});

// Exercice 6
console.log('Exercice 6 :');
let styleDiv = document.querySelector('#styleDiv');
styleDiv.addEventListener('dblclick', (evt) => {
    if (
        styleDiv.style.backgroundColor != 'blue' &&
        styleDiv.style.color != 'white'
    ) {
        styleDiv.style.backgroundColor = 'blue';
        styleDiv.style.color = 'white';
    } else {
        styleDiv.style.backgroundColor = 'white';
        styleDiv.style.color = 'black';
    }
});

// Exercice 7
console.log('Exercice 7 :');
let affichageTexte = document.querySelector('#affichageTexte');
affichageTexte.addEventListener('input', (evt) => {
    styleDiv.textContent = affichageTexte.value;
    if (!affichageTexte.value) {
        styleDiv.textContent = 'Ceci est une div !!!';
    }
});

// Exercice 8
console.log('Exercice 8 :');
let soumettre = document.querySelector('#soumettre');
let monFormulaireDeux = document.querySelector('#monFormulaireDeux');
let monInputDeux = document.querySelector('#monInputDeux');
const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
monFormulaireDeux.addEventListener('submit', (evt) => {
    event.preventDefault();
    if (!regexMail.test(monInputDeux.value)) {
        window.alert("Ceci n'est pas une adresse mail valide");
        monInputDeux.value = '';
    }
});

// Exercice 9
console.log('Exercice 9 :');
let afficherMasquer = document.querySelector('#afficherMasquer');
let maDiv = document.querySelector('#maDiv');
afficherMasquer.addEventListener('click', (evt) => {
    if (maDiv.style.display != "none") {
        maDiv.style.display = "none"
    } else {
        maDiv.style.backgroundColor = 'red';
        maDiv.style.color = 'white';
        maDiv.style.display = "block"
    }
});

// Exercice 10
console.log('Exercice 10 :');
