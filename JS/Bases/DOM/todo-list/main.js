let formTask = document.querySelector('#formTask');
let inputTask = document.querySelector('#inputTask');
let h2Todo = document.querySelector('#h2__todo');
let toDo = [];
formTask.addEventListener('submit', (evt) => {
    event.preventDefault();
    toDo = [...toDo, inputTask.value];
    console.log(toDo);
    inputTask.value = '';
    let pTask = document.createElement('p');
    pTask.textContent = toDo.findLast((element) => element.length > 0);
    console.log(pTask.textContent);
    h2Todo.insertAdjacentElement('afterend', pTask);
});
