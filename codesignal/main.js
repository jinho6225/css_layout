const tasks = ["Read an article", "Create an issue", "Review", "Fix a bug"];

// The existing code uses functions
// `moveUp`, and `moveDown`, and `renderHighestPriorityTask`,
// which are not implemented right now. Implement them.

function moveUp(index) {
  // TODO: implement
  console.log(index, "index up");
  [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
  render();
}

function moveDown(index) {
  // TODO: implement
  console.log(index, "index down");
  [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
  render();
}

function renderHighestPriorityTask() {
  // TODO: implement
  let title = document.querySelector("#highest-priority-task");
  title.innerText = tasks[0];
}

function render() {
  const container = document.querySelector(".task-list");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  tasks.forEach((task, index) => {
    const taskTextElement = document.createElement("span");
    taskTextElement.className = "task-text badge badge-info";
    taskTextElement.innerHTML = task;

    const upButtonElement = document.createElement("button");
    upButtonElement.className = "move-button btn btn-outline-primary";
    if (index === 0) {
      upButtonElement.className += " invisible";
    }
    upButtonElement.innerHTML = "&uarr;";
    upButtonElement.onclick = () => moveUp(index);

    const downButtonElement = document.createElement("button");
    downButtonElement.className = "move-button btn btn-outline-primary";
    if (index === tasks.length - 1) {
      downButtonElement.className += " invisible";
    }
    downButtonElement.innerHTML = "&darr;";
    downButtonElement.onclick = () => moveDown(index);

    const indexElement = document.createElement("span");
    indexElement.className = "task-index badge badge-secondary";
    indexElement.innerHTML = index + 1;

    const taskElement = document.createElement("li");
    taskElement.className = "task row";
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(indexElement);
    taskElement.appendChild(downButtonElement);
    taskElement.appendChild(upButtonElement);

    container.appendChild(taskElement);
  });

  renderHighestPriorityTask();
}

render();
