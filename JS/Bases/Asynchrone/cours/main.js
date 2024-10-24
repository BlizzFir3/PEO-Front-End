async function obtenirDonnées(query) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=9a310b7d46fbc7e00fbc62646ecc790c&query=${query}&language=fr-FR&region=FR&page=1`
        );

        // Si il la donnée n'est pas flagué par un ok alors création d'erreur
        // if (!response.ok) {
        //     throw new Error(response.status);
        // }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur : ' + error);
    }
}

function obtenirFilm() {
    const query = document.querySelector('#monInput').ariaValueMax;
    obtenirDonnées(query);
}

async function envoyerDonnées() {
    try {
        const response = await fetch('https://api.exemple.com/ajouter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom: 'Dupas',
                age: 30,
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erreur ' + error);
    }
}

const uploadForm = document.querySelector('#uploadForm');
uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
});
