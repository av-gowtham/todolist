let todoList = JSON.parse(localStorage.getItem("todolist")) || [];

document.querySelector(".js-add-btn").addEventListener("click", () => {
  addTodo();
});

addTodoHTML();

function addTodoHTML() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name } = todoList[i];
    const { date } = todoList[i];

    const todo = `
      <div class="bg">${name}</div>
      <div class="bg">${date}</div>
      <button class="js-delete">Delete</button>`;

    todoListHTML += todo;
  }
  document.querySelector(".js-add-todo").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete").forEach((deleteElement, index) => {
    deleteElement.addEventListener("click", () => {
      todoList.splice(index, 1);
      addTodoHTML();
      localStorage.setItem("todolist", JSON.stringify(todoList));
    });
  });
}

function addTodo() {
  const inputElement = document.querySelector(".input");
  const dateInputElement = document.querySelector(".js-date");

  if (inputElement.value == "" || dateInputElement.value == "") {
    alert("Enter the Todo and Date properly");
    return;
  }

  todoList.push({ name: inputElement.value, date: dateInputElement.value });

  inputElement.value = "";
  dateInputElement.value = "";

  addTodoHTML();

  localStorage.setItem("todolist", JSON.stringify(todoList));
}
