// setTimeout(fct, delai)
// setInterval(fct, delai)

function direBonjour() {
    console.log('Bonjour !');
}

const idBonjour = setTimeout(direBonjour, 2000);

clearTimeout(idBonjour);

function afficherHeure() {
    console.log(new Date().toLocaleDateString());
}

const idDate = setInterval(afficherHeure, 1000);

clearInterval(idDate);

const titre = document.querySelector('h1');
titre.textContent('Bonsoir');
console.log(titre.textcontent);
//Créatïon d'éléments

const popup = document.createEIement('div');
const text = document.createElement('p');
text.innerText = 'Lorem ipsum';
popup.appendChild(text);

const insertPopup = document.querySeIector('#insertPopup');
insertPopup.appendChild(popup);
