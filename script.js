
// Select elements from the HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task when the "Add" button is clicked
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Add a new task to the list
function addTask(taskText) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${taskText}</span>
    <button class="delete-task">Delete</button>
  `;

  // Add event listeners for checkbox and delete button
  const checkbox = listItem.querySelector('.task-checkbox');
  const deleteButton = listItem.querySelector('.delete-task');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  // Append the new task to the task list
  taskList.appendChild(listItem);
}
