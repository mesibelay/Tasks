const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.title = 'Mark as completed';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.title = 'Delete task';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = '';
});
