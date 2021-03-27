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
const todoList = [];

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
  inputTodo.value = '';

  // clear before append
  todoListBox.innerHTML = '';

  // append every item to the list
  todoList.forEach((todo, idx) => {
    const html = `
      <div class='todo-item'>
        <input type="checkbox" class='todo-item-checkbox' name='checkbox-${idx}' />
          <div class='todo-item-text'>
            ${todo.text}
          </div>

        <button class='btn-delete'>Delete</button>
      </div>
    `;

    todoListBox.insertAdjacentHTML('beforeend', html);
  });

  // Get elements after rendering
  todoItemCheckboxList = document.querySelectorAll('.todo-item-checkbox');
  todoItemList = document.querySelectorAll('.todo-item');
  todoItemDelBtns = document.querySelectorAll('.btn-delete');

  // Add event to all todo list
  todoItemCheckboxList.forEach((todo, idx) => {
    // Add checked style
    todo.addEventListener('click', e => {
      if (idx === Number(e.target.name.split('-')[1])) {
        const target = todoItemList[Number(e.target.name.split('-')[1])];

        if (target.classList[1]) {
          target.classList.remove('checked');
        } else {
          target.classList.add('checked');
        }
      }
    });
  });

  console.log(todoList);
}

function updateDate() {
  const currentTime = new Date();
  year.textContent = currentTime.getFullYear();
  date.textContent = currentTime.getDate();

  // 월 정하기
  switch (currentTime.getMonth()) {
    case 0:
      month.textContent = 'JAN';
      break;

    case 1:
      month.textContent = 'FEB';
      break;

    case 2:
      month.textContent = 'MAR';
      break;

    case 3:
      month.textContent = 'APR';
      break;

    case 4:
      month.textContent = 'MAY';
      break;

    case 5:
      month.textContent = 'JUN';
      break;

    case 6:
      month.textContent = 'JUL';
      break;

    case 7:
      month.textContent = 'AUG';
      break;

    case 8:
      month.textContent = 'SEP';
      break;

    case 9:
      month.textContent = 'OCT';
      break;

    case 10:
      month.textContent = 'NOV';
      break;

    case 11:
      month.textContent = 'DEC';
      break;
  }

  // 요일 정하기
  switch (currentTime.getDay()) {
    // 일요일
    case 0:
      day.textContent = 'SUNDAY';
      break;

    // 월요일
    case 1:
      day.textContent = 'MONDAY';
      break;

    // 화요일
    case 2:
      day.textContent = 'TUESDAY';
      break;

    // 수요일
    case 3:
      day.textContent = 'WEDNESDAY';
      break;

    // 목요일
    case 4:
      day.textContent = 'THURSDAY';
      break;

    // 금요일
    case 5:
      day.textContent = 'FRIDAY';
      break;

    // 토요일
    case 6:
      day.textContent = 'SATURDAY';
      break;
  }
}

updateDate();
