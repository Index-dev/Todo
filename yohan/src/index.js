const inputTodo = document.querySelector('.input-todo');
const btnAdd = document.querySelector('.btn-add');
const todoListBox = document.querySelector('.todo-list-box');
const todoList = [];

inputTodo.addEventListener('keydown', e => {
  inputTodo.textContent = e.target.value;
});

inputTodo.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addTodo(inputTodo.textContent);
    console.log(todoList);
  }
});

btnAdd.addEventListener('click', function () {
  addTodo(inputTodo.textContent);
  console.log(todoList);
});

function addTodo(value) {
  todoList.push(value);
  inputTodo.value = '';

  // Insert part
  todoListBox.innerHTML = '';

  todoList.forEach(todo => {
    const html = `
      <div class='todo-item'>
        ${todo}
      </div>
    `;

    todoListBox.insertAdjacentHTML('beforeend', html);
  });
}
