// Exercice 1 :
console.log('Exercice 1 :');
const monElement = document.querySelector('#monElement');
console.log(monElement);

// Exercice 2 :
console.log('Exercice 2 :');
let maClasse = document.querySelector('.maClasse');
console.log(maClasse);

// Exercice 3 :
console.log('Exercice 3 :');
let div = document.querySelector('div');
div.textContent = 'Ceci est mon texte ajouté';
document.body.appendChild(div);
console.log(div.textContent);

// Exercice 4 :
console.log('Exercice 4 :');
let elementASupprimer = document.querySelector('#elementASupprimer');
console.log(elementASupprimer);
document.body.removeChild(elementASupprimer);

// Exercice 5 :
console.log('Exercice 5 :');
monElement.style.color = 'red';
monElement.style.backgroundColor = 'yellow';
console.log(monElement);

// Exercice 6 :
console.log('Exercice 6 :');
monElement.className = 'nouvelleClasse';
console.log(monElement);
setTimeout(() => {
    monElement.classList.remove('nouvelleClasse')
    console.log(monElement);
}, 3000);


// Exercice 7 :
console.log('Exercice 7 :');
setTimeout(() => {
    monElement.innerText = 'Ceci apparaît apès 2 secondes';
}, 2000);

// Exercice 8 :
console.log('Exercice 8 :');

// Exercice 9 :
console.log('Exercice 9 :');

// Exercice 10 :
console.log('Exercice 10 :');
