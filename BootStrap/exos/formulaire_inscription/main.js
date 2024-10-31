let monForm = document.querySelector('#monForm');
let nameForm = document.querySelector('#name');
let firstName = document.querySelector('#firstName');
let mail = document.querySelector('#mail');
let password = document.querySelector('#password');
let gender = document.querySelector('#gender');
const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

monForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let validation = 0;
    if (!regexMail.test(mail.value)) {
        window.alert("Ceci n'est pas une adresse mail valide");
        mail.value = '';
    } else {
        validation += 1;
    }
    let passwordValue = password.value;

    if (passwordValue.length < 4) {
        window.alert(
            "Mot de passe invalide, veuillez entrer un mot de passe d'au moins de 4 charactère"
        );
    } else {
        validation += 1;
    }

    let nameValue = nameForm.value;
    let firstNameValue = firstName.value;
    if (nameValue.length < 3) {
        window.alert('Veuillez saisir un nom correcte');
    } else {
        validation += 1;
    }
    if (firstNameValue.length < 3) {
        window.alert('Veuillez saisir un prénom correcte');
    } else {
        validation += 1;
    }
    if (validation === 4) {
        window.alert("Formulaire d'inscription pris en compte");
    }
});
