// Récupération des éléments
let formTask = document.querySelector('#formTask');
let inputTask = document.querySelector('#inputTask');
let h2Todo = document.querySelector('#h2__todo');

// Tableau pour stocker les tâches
let toDo = [];

// Gestion de l'ajout de nouvelles tâches
formTask.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Ajout de la nouvelle tâche au tableau, et vérifie qu'elle n'est pas vide
    let newTask = inputTask.value.trim();

    if (newTask) {
        toDo.push(newTask);
        inputTask.value = '';

        // Crée un élément <p> pour la tâche
        let pTask = document.createElement('p');
        pTask.textContent = newTask;
        pTask.classList.add('pToDo');
        pTask.style.cursor = 'pointer';

        // Insertion de la nouvelle tâche dans la colonne "à faire", au début de celle ci
        h2Todo.insertAdjacentElement('afterend', pTask);

        // Ajout de l'événement 'click' pour déplacer la tâche vers la colonne "Fait"
        pTask.addEventListener('click', () => {
            pTask.remove(); // Retire la tâche de la colonne "à faire"
            moveToDone(pTask); // Déplace la tâche dans la colonne "Fait"
        });
    }
});

// Fonction pour déplacer une tâche dans la colonne "Fait"
function moveToDone(taskElement) {
    let h2Done = document.querySelector('#h2__done');

    taskElement.classList.remove('pToDo'); // Enlève la classe "à faire"
    taskElement.classList.add('pDone'); // Ajoute une classe pour la tâche "Fait"
    h2Done.insertAdjacentElement('afterend', taskElement); // Ajoute l'élément dans la colonne "Fait"
}
