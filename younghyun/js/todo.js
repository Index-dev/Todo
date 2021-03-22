const todoForm = document.querySelector(".todoForm"),
  inputText = todoForm.querySelector(".inputText");

const todoList = [];

function handleSubmit(event) {
  event.preventDefault();
  const content = inputText.value;
  todoList.splice(0, 0, content);
  inputText.value = "";
  console.log(todoList);
}

function init() {
  todoForm.addEventListener("submit", handleSubmit);
}

init();
