import './style.scss';

// Array of todo-list tasks

const TASKS = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
  {
    description: 'Task 4',
    completed: false,
    index: 4,
  },
  {
    description: 'Task 5',
    completed: false,
    index: 5,
  },
];

const todoList = document.querySelector('.tasks');

// Iterate through the array of todo-list tasks
const renderTasks = (todoList) => {
  TASKS.forEach((task) => {
    // Create a new list item
    const listItem = document.createElement('div');
    // Add classname to the list item
    listItem.classList.add('task');

    // Add HTML to the list item
    listItem.innerHTML = `
    <input 
      type="checkbox"
      id="task-${task.index}"
    />
    <label for="task-${task.index}">
      <span class="custom-checkbox"></span>
      ${task.description}
    </label>
    <svg xmlns="http://www.w3.org/2000/svg" class="todo-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
    `;

    // Add the list item to the todo-list
    todoList.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks(todoList));
