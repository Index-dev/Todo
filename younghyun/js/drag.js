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
    const afterElement = getDragAfterElement(container, event.clientY);
    const draggedli = document.querySelector(".dragging");
    if (afterElement === undefined) {
      container.appendChild(draggedli);
    } else {
      container.insertBefore(draggedli, afterElement);
    }

    const liList = document.querySelectorAll("li");
    console.log(liList);
    // listUl.element.forEach(function (li) {
    //   console.log(li);
    // });
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".todoItem:not(.dragging)"),
  ];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, closestInitialValue()).element;
}

function closestInitialValue() {
  return { offset: Number.NEGATIVE_INFINITY };
}
