const todoForm = document.querySelector(".todoForm"),
  inputText = todoForm.querySelector(".inputText"),
  listForm = document.querySelector(".todoList");

const todoList = [];
function handleSubmit(event) {
  event.preventDefault();
  const content = {
    content: inputText.value,
    done: false,
  };
  inputText.value = "";
  todoList.splice(0, 0, content);
  localStorage.setItem("todo list", JSON.stringify(todoList));
  draw();
}

function draw() {
  clear();
  for (let index = 0; index < todoList.length; index++) {
    const li = document.createElement("li");
    const work = document.createElement("p");
    work.innerText = todoList[index].content;
    li.appendChild(work);
    listForm.appendChild(li);
  }
}

function load() {
  savedList = JSON.parse(localStorage.getItem("todo list"));
  todoList.splice(0, todoList.length - 1);
  for (let index = savedList.length - 1; index >= 0; index--) {
    todoList.splice(0, 0, savedList[index]);
  }
}

function clear() {
  listForm.innerHTML = "";
}

function init() {
  load();
  draw();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
