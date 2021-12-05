import Store from './Store.js';

// UI Class: Handle UI Class
export default class UI {
  /**
   * @function displayTasks - display tasks on the UI
   */
  static displayTasks() {
    const tasks = Store.getTasks();

    const list = document.querySelector('.tasks');
    list.innerHTML = '';

    tasks.forEach((task) => {
      UI.addTaskToList(task);
    });
  }

  /**
   * @function addTaskToList - add task to the UI
   * @param {Object} task - task object with keys: {description, completed, and index}
   */
  static addTaskToList(task) {
    const todoList = document.querySelector('.tasks');

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
   <input type="text" value="${task.description}" class="text-field">
   <p class="d-none">${task.index}</p>
<i class="fa fa-trash todo-icon deleteTask delete-task" aria-hidden="true"></i>

   `;

    const textField = listItem.querySelector('.text-field');
    textField.addEventListener('keyup', (e) => {
      // if (e.keyCode === 13) {
      // if enter key is pressed
      const tasks = Store.getTasks();
      // find the task in the array
      const task = tasks.find(
        (t) => t.index
          === parseInt(e.target.previousElementSibling.id.split('-')[1], 10),
      );
      // update the task description
      task.description = e.target.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      // }
    });
    // Add the list item to the todo-list
    todoList.appendChild(listItem);

    // Add 'editing' classname to textfield on focus
    textField.addEventListener('focusin', () => {
      listItem.classList.add('editing');
    });

    // Remove focus from textarea
    textField.addEventListener('focusout', () => {
      listItem.classList.remove('editing');
    });

    // Display Number of tasks left
    UI.renderTaskCount();
  }

  /**
   * @function checkCompletedTask - if task is completed, keep it checked
   */
  // keep completed tasks checked on page reload
  static checkCompletedTasks() {
    // Get tasks from localStorage
    const tasks = Store.getTasks();

    tasks.forEach((task) => {
      if (task.completed === true) {
        document.getElementById(`task-${task.index}`).checked = true;
      }
    });
  }

  /**
   * @function renderTaskCount - display number of tasks left
   */
  static renderTaskCount() {
    const tasks = Store.getTasks();
    const uncompletedTasks = tasks.filter((task) => task.completed === false);
    const taskCount = document.querySelector('.task-count');
    taskCount.textContent = `${uncompletedTasks.length}`;
  }

  /**
   * @function deleteTask - delete task from the UI
   * @param {Event Object} e - event target
   */
  static deleteTask(el) {
    if (el.classList.contains('delete-task')) {
      el.parentElement.remove();
    }
  }

  /**
   * @function showAlert - display alert message
   * @param {string} message - message to display
   * @param {string} className - classname to add to the alert
   */
  static showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.todo-list');
    // Get form
    const form = document.querySelector('.todo-body');
    // Insert alert
    container.insertBefore(div, form);
    // Timeout after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  /**
   * @function clearCompletedTasks - remove completed tasks from the UI
   */
  // clear all completed tasks from UI
  static clearCompletedTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      if (task.completed === true) {
        document.getElementById(`task-${task.index}`).parentElement.remove();
      }
    });
  }
}
