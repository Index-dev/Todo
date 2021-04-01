const containers = document.querySelectorAll(".todoContainer");

containers.forEach((container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    const afterElement = getDragAfterElement(container, event.clientY);
    const draggedli = document.querySelector(".dragging");

    // console.log(todoList);
    // document.querySelectorAll(".todoItem").forEach(function (item) {
    //     console.log(item);
    //     console.log(item.querySelector("p").innerText);
    // });

    if (afterElement === undefined) {
      console.log(draggedli);
      container.appendChild(draggedli);
    } else {
      container.insertBefore(draggedli, afterElement);
    }
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
