const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter"); // Nuevo elemento para el contador

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  // Eliminar tarea
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateTaskCount();
  });

  // Marcar o desmarcar tarea completada
  li.addEventListener("click", (event) => {
    // Evita que el clic en el botón ❌ marque la tarea como completada
    if (event.target.tagName === "BUTTON") return;
    li.classList.toggle("completed");
    updateTaskCount();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";

  updateTaskCount(); // Actualizar contador al agregar tarea
}

// Función para actualizar el contador de tareas pendientes
function updateTaskCount() {
  const totalTasks = taskList.querySelectorAll("li").length;
  const completedTasks = taskList.querySelectorAll(".completed").length;
  const pendingTasks = totalTasks - completedTasks;

  taskCounter.textContent = `Tareas pendientes: ${pendingTasks}`;
}

document.getElementById('year').textContent = new Date().getFullYear();