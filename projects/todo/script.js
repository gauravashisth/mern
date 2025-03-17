const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];
addTaskButton.addEventListener("click", () => {
  const taskTest = todoInput.value.trim();
  if (taskTest === "") return;
  const newTask = { id: Date.now(), text: taskTest, completed: false };
  tasks.push(newTask);
  todoInput.value = ""; //clears the input box
});
