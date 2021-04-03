// About time
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const date = document.querySelector('.date');
const day = document.querySelector('.day');

// About UI
const inputTodo = document.querySelector('.input-todo');
const btnAdd = document.querySelector('.btn-add');
const todoListBox = document.querySelector('.todo-list-box');
let todoItemCheckboxList = null;
let todoItemList = null;
let todoItemDelBtns = null;

// Datas
const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEV',
];

const days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

const todoList = getPersistentData('todoList') || [];

// Events
inputTodo.addEventListener('keydown', e => {
  inputTodo.textContent = e.target.value;
});

inputTodo.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addTodo(inputTodo.textContent);
  }
});

btnAdd.addEventListener('click', function () {
  addTodo(inputTodo.textContent);
});

// Functions
function addTodo(value) {
  todoList.push({
    key: todoList.length,
    text: value,
    checked: false,
  });

  makePersistent(todoList, 'todoList');
  render();
}

function deleteTodo(idx) {
  todoList.splice(idx, 1);

  makePersistent(todoList, 'todoList');
  render();
}

function makePersistent(targetData, name) {
  sessionStorage.setItem(name, JSON.stringify(targetData));
}

function getPersistentData(name) {
  return JSON.parse(sessionStorage.getItem(name));
}

function render() {
  inputTodo.value = '';

  // clear before append
  todoListBox.innerHTML = '';

  // append every item to the list
  todoList.forEach((todo, idx) => {
    const html = `
      <div class='todo-item ${todo.checked ? 'checked' : ''}'>
        <input type="checkbox" class='todo-item-checkbox' name='checkbox-${idx}' ${
      todo.checked && 'checked'
    } />
          <div class='todo-item-text'>
            ${todo.text}
          </div>

        <button class='btn-delete' name='del-${idx}'>Delete</button>
      </div>
    `;

    todoListBox.insertAdjacentHTML('beforeend', html);
  });

  // Get elements after rendering
  todoItemCheckboxList = document.querySelectorAll('.todo-item-checkbox');
  todoItemList = document.querySelectorAll('.todo-item');
  todoItemDelBtns = document.querySelectorAll('.btn-delete');

  // Add check event to all todo item
  todoItemCheckboxList.forEach((todo, idx) => {
    // Add checked style
    todo.addEventListener('click', e => {
      if (idx === Number(e.target.name.split('-')[1])) {
        const target = todoItemList[Number(e.target.name.split('-')[1])];

        if (target.classList[1]) {
          todoList[idx].checked = false;
          target.classList.remove('checked');
        } else {
          todoList[idx].checked = true;
          target.classList.add('checked');
        }

        makePersistent(todoList, 'todoList');
      }
    });
  });

  // Add delete event to all todo item
  todoItemDelBtns.forEach((delBtn, idx) => {
    delBtn.addEventListener('click', e => {
      const targetIdx = Number(e.target.name.split('-')[1]);

      idx === targetIdx && deleteTodo(targetIdx);
    });
  });
}

function updateDate() {
  const currentTime = new Date();
  year.textContent = currentTime.getFullYear();
  date.textContent = currentTime.getDate();

  // 월 정하기
  month.textContent = months[currentTime.getMonth()];
  // 요일 정하기
  day.textContent = days[currentTime.getDay()];
}

render();
updateDate();
