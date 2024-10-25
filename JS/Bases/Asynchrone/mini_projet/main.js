let searchForm = document.querySelector('#searchForm');
let monInput = document.querySelector('#monInput');
let resultContainer = document.querySelector('#resultContainer');

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const query = monInput.value;
    obtenirDonnées(query);
});

async function obtenirDonnées(query) {
    try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}` &&
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        );
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data);

        resultContainer.innerHTML = '';
        if (data.drinks) {
            displaySearch(data.drinks);
        }
    } catch (error) {
        console.error('Erreur : ' + error);
    }
}

function displaySearch(drinks) {
    drinks.forEach((cocktail) => {
        // Créer une section pour chaque cocktail
        let cocktailSection = document.createElement('section');
        cocktailSection.classList.add('container__cocktail');

        // Ajoute une section pour le nom et la description
        let nameSection = document.createElement('section');
        nameSection.classList.add('container__name');

        // Ajouter un titre et une image
        let cocktailName = document.createElement('h3');
        cocktailName.textContent = cocktail.strDrink;

        let cocktailImage = document.createElement('img');
        cocktailImage.src = cocktail.strDrinkThumb;
        cocktailImage.alt = cocktail.strDrink;

        // Ajouter description
        let cocktailDescription = document.createElement('p');
        cocktailDescription.textContent = cocktail.strInstructions;

        // Ajouter la section au conteneur
        resultContainer.appendChild(cocktailSection);

        // Ajouter les éléments à la section
        cocktailSection.appendChild(cocktailImage);
        cocktailSection.appendChild(nameSection);
        nameSection.appendChild(cocktailName);
        nameSection.appendChild(cocktailDescription);
    });
}
