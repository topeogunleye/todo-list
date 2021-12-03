/* eslint-disable max-classes-per-file */
import './style.scss';
import Store from './Store.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', UI.displayTasks);

document.addEventListener('DOMContentLoaded', UI.checkCompletedTasks);

document.addEventListener('DOMContentLoaded', UI.renderTaskCount);

// event listener for checkbox change
document.querySelector('.tasks').addEventListener('change', (e) => {
  Store.changeTaskStatus(e);
  UI.renderTaskCount();
});

// Event: Add a task
document.querySelector('.tasks-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const taskDescription = document.querySelector('#task-description').value;

  if (taskDescription === '') {
    alert('Please add a task');
  } else {
    const task = {
      description: taskDescription,
      completed: false,
      index: Store.getTasks().length + 1,
    };

    Store.addTask(task);
    Store.updateTasksIndex();

    UI.addTaskToList(task);
    UI.renderTaskCount();
    document.querySelector('#task-description').value = '';
  }
});

// Event: Remove a task
document.querySelector('.tasks').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-task')) {
    UI.deleteTask(e.target);
    Store.removeTask(e.target.previousElementSibling.textContent);
    Store.updateTasksIndex();
    UI.displayTasks();
    UI.renderTaskCount();
  }
});

// Event: Clear all completed
document.querySelector('.clear-completed').addEventListener('click', () => {
  Store.clearCompletedTasks();
  Store.updateTasksIndex();
  UI.displayTasks();
  UI.renderTaskCount();
});
