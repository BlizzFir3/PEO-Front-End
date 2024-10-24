let searchForm = document.querySelector('#searchForm');
let monInput = document.querySelector('#monInput');
searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const query = monInput.value;
    obtenirDonnées(query);
});

async function obtenirDonnées(query) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);

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
