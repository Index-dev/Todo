const draggables = document.querySelectorAll(".todoItem");
const containers = document.querySelectorAll(".todoContainer");

draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", (event) => {
        event.preventDefault();
        const draggedli = document.querySelector(".dragging");
        container.appendChild(draggedli);
    });
});
