/* eslint-disable max-classes-per-file */
import './style.scss';
import Store from './Store.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', UI.displayTasks);

document.addEventListener('DOMContentLoaded', UI.checkCompletedTasks);

document.addEventListener('DOMContentLoaded', UI.renderTaskCount);

// Event: Add a task
document.querySelector('.tasks-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const taskDescription = document.querySelector('#task-description').value;

  if (taskDescription === '') {
    UI.showAlert('Please add a task', 'danger');
  } else {
    const task = {
      description: taskDescription,
      completed: false,
      index: Store.getTasks().length + 1,
    };

    Store.addTask(task);
    Store.updateTasksIndex();

    UI.addTaskToList(task);
    UI.showAlert('Task added', 'success');
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
    UI.showAlert('Task removed', 'success');
    UI.renderTaskCount();
  }
});

// Event: Mark a task as completed or not completed
document.querySelector('.tasks').addEventListener('change', (e) => {
  Store.changeTaskStatus(e.target);
  UI.renderTaskCount();
});

// Event: Clear all completed
document.querySelector('.clear-completed').addEventListener('click', () => {
  // if no tasks are completed, show alert
  if (Store.getCompletedTasks().length === 0) {
    UI.showAlert('No completed tasks', 'info');
  } else {
    UI.showAlert('Completed tasks cleared', 'success');
  }
  Store.clearCompletedTasks();
  Store.updateTasksIndex();
  UI.displayTasks();
  UI.renderTaskCount();
});
