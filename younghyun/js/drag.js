const containers = document.querySelectorAll(".todoContainer");

containers.forEach((container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    const draggedli = document.querySelector(".dragging");
    const ulType = container.classList.contains("important")
      ? "important"
      : "common";
    const liType = draggedli.classList.contains("important")
      ? "important"
      : "common";

    if (ulType !== liType) {
      draggedli.classList.remove(liType);
      draggedli.classList.add(ulType);
    }

    const afterElement = getDragAfterElement(container, event.clientY);

    if (afterElement === undefined) {
      container.appendChild(draggedli);
    } else {
      container.insertBefore(draggedli, afterElement);
    }
    FixSessionList();
  });
});
function FixSessionList() {
  let newCommons = [];
  let newImportants = [];
  document.querySelectorAll(".todoItem").forEach(function (item) {
    if (item.classList.contains("important")) {
      newImportants.push({
        index: parseInt(item.id),
        content: item.querySelector("p").innerText,
        done: item.classList.contains("done") ? "done" : "donsn`t",
        importance: "important",
      });
    } else {
      newCommons.push({
        index: parseInt(item.id),
        content: item.querySelector("p").innerText,
        done: item.classList.contains("done") ? "done" : "donsn`t",
        importance: "common",
      });
    }
  });

  saveList(newImportants, newCommons);
  function saveList(importants, commons) {
    localStorage.setItem("Importants", JSON.stringify(importants));
    localStorage.setItem("Commons", JSON.stringify(commons));
  }
}
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
