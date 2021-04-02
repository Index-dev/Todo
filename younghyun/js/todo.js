const todoForm = document.querySelector(".todoForm"),
  inputText = todoForm.querySelector(".inputText"),
  commonList = document.querySelector(".common"),
  importantList = document.querySelector(".important");

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

let tempCommons = [];
let tempImportants = [];
function getIndex() {
  let max = 0;
  tempCommons.forEach(function (item) {
    max = max > item.index ? max : item.index;
  });
  tempImportants.forEach(function (item) {
    max = max > item.index ? max : item.index;
  });
  return max + 1;
}
function handleSubmit(event) {
  event.preventDefault();
  const content = {
    index: getIndex(),
    content: inputText.value,
    done: "done",
    importance: "common",
  };
  inputText.value = "";
  tempCommons.splice(0, 0, content);
  saveCommonList(tempCommons);
  load();
}

function saveCommonList(List) {
  return localStorage.setItem("Commons", JSON.stringify(List));
}
function saveImportantList(List) {
  return localStorage.setItem("Importants", JSON.stringify(List));
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
  if (todo.importance === "important") {
    importantList.appendChild(li);
  } else {
    commonList.appendChild(li);
  }
}
function removeTodo(event) {
  const button = event.target;
  const li = button.parentNode;
  if (li.classList.contains("common")) {
    const result = tempCommons.filter((todo) => {
      return todo.index != li.id;
    });
    saveCommonList(result);
  } else {
    const result = tempImportants.filter((todo) => {
      return todo.index != li.id;
    });
    saveImportantList(result);
  }
  load();
}

function load() {
  clear();
  if (localStorage.getItem("Commons")) {
    const commons = JSON.parse(localStorage.getItem("Commons"));
    tempCommons = commons;
    tempCommons.forEach(function (todo) {
      draw(todo);
    });
  }
  if (localStorage.getItem("Importants")) {
    const importants = JSON.parse(localStorage.getItem("Importants"));
    tempImportants = importants;
    tempImportants.forEach(function (todo) {
      draw(todo);
    });
  }
  addDragTags();
}

function clear() {
  commonList.innerHTML = "";
  importantList.innerHTML = "";
}

function init() {
  load();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
