const todoForm = document.querySelector(".todoForm"),
  inputText = todoForm.querySelector(".inputText"),
  listForm = document.querySelector(".todoList");

const todoList = [];

function handleSubmit(event) {
  event.preventDefault();
  const content = inputText.value;
  todoList.splice(0, 0, content);
  inputText.value = "";
  const li = document.createElement("li");
  const text = document.createElement("p");
  text.innerText = content;
  li.appendChild(text);
  listForm.appendChild(li);
}

function init() {
  todoForm.addEventListener("submit", handleSubmit);
}

init();
