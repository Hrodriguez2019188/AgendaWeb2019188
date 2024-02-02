let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>[${task.priority}]</span> <span id="taskName_${index}" contenteditable="true">${task.name}</span> 
                    <button class="buttonEdit" onclick="editTask(${index})">Editar</button>
                    <button onclick="deleteTask(${index})">Eliminar</button>`;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  const taskPriority = prompt("Ingrese la prioridad de la tarea");

  if (taskName !== '') {
    tasks.push({ name: taskName, priority: taskPriority });
    renderTasks();
    taskInput.value = '';
  } else {
    alert('Por favor ingrese una tarea válida');
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newName = prompt("Ingrese el nuevo nombre de la tarea");
  const newPriority = prompt("Ingrese la nueva prioridad de la tarea");

  if (newName !== null && newPriority !== null) {
    tasks[index].name = newName.trim();
    tasks[index].priority = newPriority.trim();
    renderTasks();
  }
}

window.onload = function() {
  renderTasks();
};
