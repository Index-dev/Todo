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
    done: "doesn`t",
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
  const remove = document.createElement("button");
  remove.addEventListener("click", removeTodo);
  remove.innerText = "삭제";
  const done = document.createElement("button");
  done.addEventListener("click", changeDone);
  done.innerText = li.classList.contains("done") ? "doesn`t" : "done";
  li.classList.add("todoItem", todo.done, todo.importance);
  li.draggable = "true";
  li.appendChild(remove);
  li.appendChild(done);
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
function changeDone(event) {
  const button = event.target;
  const li = button.parentNode;
  if (li.classList.contains("done")) {
    li.classList.remove("done");
    li.classList.add("doesn`t");
  } else {
    li.classList.remove("doesn`t");
    li.classList.add("done");
  }

  if (li.classList.contains("important")) {
    let tempImportant = JSON.parse(localStorage.getItem("Importants"));
    for (
      let index = 0, length = tempImportant.length;
      index < length;
      index++
    ) {
      if (tempImportant[index].index == parseInt(li.id)) {
        tempImportant[index].done =
          tempImportant[index].done === "done" ? "doesn`t" : "done";
        break;
      }
    }
    saveImportantList(tempImportant);
  } else {
    let tempCommon = JSON.parse(localStorage.getItem("Commons"));
    for (let index = 0, length = tempCommon.length; index < length; index++) {
      if (tempCommon[index].index == parseInt(li.id)) {
        tempCommon[index].done =
          tempCommon[index].done === "done" ? "doesn`t" : "done";
        break;
      }
    }
    saveCommonList(tempCommon);
  }
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
