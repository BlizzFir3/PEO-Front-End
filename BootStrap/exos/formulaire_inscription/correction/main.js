const form = document.querySelector('#form_inscription');
const errorMessages = document.querySelectorAll('.error-message');
const successMessage = document.getElementById('success');

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function displayErrorAndFocus(selector) {
    //rechercher dans le document le premier élément correspondant au sélecteur spécifié
    document.querySelector(selector).style.display = 'block';
    document.querySelector(selector).focus();
}

function handleSubmit(event) {
    // Empêcher la soumission par défaut du formulaire
    event.preventDefault();

    // Récupérer les valeurs des champs
    const nom = document.querySelector('#nom').value.trim();
    const prenom = document.querySelector('#prenom').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Vider les messages d'erreur existants
    errorMessages.forEach((message) => {
        message.style.display = 'none';
    });

    // Vérifier si les champs sont vides
    if (!nom) {
        displayErrorAndFocus('#nom-error');
    }

    if (!prenom) {
        displayErrorAndFocus('#prenom-error');
    }

    if (!email || !validateEmail(email)) {
        displayErrorAndFocus('#email-error');
    }

    if (!password || !validatePassword(password)) {
        displayErrorAndFocus('#password-error');
    }

    // Si tout est valide, envoyer le formulaire
    if (
        nom &&
        prenom &&
        email &&
        validateEmail(email) &&
        password &&
        validatePassword(password)
    ) {
        successMessage.style.display = 'block';
    }
}

form.addEventListener('submit', handleSubmit);
