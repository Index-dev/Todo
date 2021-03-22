const todoForm = document.querySelector(".todoForm"),
  inputText = todoForm.querySelector(".inputText");

function handleSubmit(event) {
  event.preventDefault();
  console.log(inputText.value);
}

function init() {
  TodoForm.addEventListener("submit", handleSubmit);
}

init();
