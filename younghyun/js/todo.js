const todoForm = document.querySelector(".todoForm"),
    inputText = todoForm.querySelector(".inputText"),
    listUl = document.querySelector(".todoList");

let todoList = [];
function getIndex() {
    let max = 0;
    todoList.forEach(function (item) {
        console.log(max, item.index);
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
    li.className = "todoItem";
    li.draggable = "true";
    li.appendChild(button);
    li.appendChild(work);
    li.id = todo.index;
    listUl.appendChild(li);
}
function removeTodo(event) {
    const button = event.target;
    const li = button.parentNode;
    const result = todoList.filter((todo) => {
        console.log(todo.index, li.id);
        return todo.index != li.id;
    });
    saveList(result);
    init();
}

function load() {
    if (localStorage.getItem("todo list")) {
        savedList = JSON.parse(localStorage.getItem("todo list"));
        todoList = savedList;
        saveList(todoList);
        clear();
        todoList.forEach(function (todo) {
            draw(todo);
        });
    }
}

function clear() {
    listUl.innerHTML = "";
}

function init() {
    load();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
