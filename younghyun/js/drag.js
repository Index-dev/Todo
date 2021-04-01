const containers = document.querySelectorAll(".todoContainer");

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

    let newArray = [];
    document.querySelectorAll(".todoItem").forEach(function (item) {
      newArray.push({
        index: parseInt(item.id),
        content: item.querySelector("p").innerText,
        done: Boolean(item.classList[1]),
        importance: item.classList[2],
      });
    });

    saveList(newArray);
    function saveList(List) {
      return localStorage.setItem("todo list", JSON.stringify(List));
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
