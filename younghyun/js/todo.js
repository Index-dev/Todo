const todoForm = document.querySelector(".todoForm"),
  inputText = todoForm.querySelector(".inputText"),
  commonList = document.querySelector(".common");

function addDragTags() {
  const draggables = document.querySelectorAll(".todoItem");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });
}

let todoList = [];
function getIndex() {
  let max = 0;
  todoList.forEach(function (item) {
    max = max > item.index ? max : item.index;
  });
  return max + 1;
}
function handleSubmit(event) {
  event.preventDefault();
  const content = {
    index: getIndex(),
    content: inputText.value,
    done: false,
    importance: "common",
  };
  inputText.value = "";
  todoList.splice(0, 0, content);
  saveList(todoList);
  load();
}

function saveList(List) {
  return localStorage.setItem("todo list", JSON.stringify(List));
}

function draw(todo) {
  const li = document.createElement("li");
  const work = document.createElement("p");
  work.innerText = todo.content;
  const button = document.createElement("button");
  button.addEventListener("click", removeTodo);
  button.innerText = "삭제";
  li.classList.add("todoItem", todo.done, todo.importance);
  li.draggable = "true";
  li.appendChild(button);
  li.appendChild(work);
  li.id = todo.index;
  commonList.appendChild(li);
}
function removeTodo(event) {
  const button = event.target;
  const li = button.parentNode;
  const result = todoList.filter((todo) => {
    return todo.index != li.id;
  });
  saveList(result);
  load();
}

function load() {
  clear();
  if (localStorage.getItem("todo list")) {
    const savedList = JSON.parse(localStorage.getItem("todo list"));
    todoList = savedList;
    todoList.forEach(function (todo) {
      draw(todo);
    });
    addDragTags();
  }
}

function clear() {
  commonList.innerHTML = "";
}

function init() {
  load();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
