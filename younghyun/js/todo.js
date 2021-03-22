const TodoForm = document.querySelector(".todoForm"),
  inputText = TodoForm.querySelector(".inputText");

function handleSubmit(event) {
  event.preventDefault();
  console.log(inputText.value);
}

function init() {
  TodoForm.addEventListener("submit", handleSubmit);
}

init();
