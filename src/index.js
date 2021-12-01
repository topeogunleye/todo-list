import './style.scss';
import { TASKS } from './tasks';
import { statusUpdates } from './statusUpdates';

// Store Class: Handles localStorage
class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [...TASKS]; // copy the array
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static changeTaskStatus(e) {
    const TASKS = Store.getTasks();

    const task = TASKS.find(
      (t) => t.index === parseInt(e.target.id.split('-')[1])
    );
    if (e.target.checked) {
      statusUpdates.updateStatus(task, 'completed');
    } else {
      statusUpdates.updateStatus(task, 'uncompleted');
    }

    localStorage.setItem('tasks', JSON.stringify(TASKS));
    console.log(TASKS);
  }

  static removeTask(task) {
    const tasks = Store.getTasks();
    tasks = tasks.filter((t) => t.id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// UI Class: Handle UI Class
class UI {
  static displayTasks() {
    const tasks = Store.getTasks();
    console.log(TASKS);

    tasks.forEach((task) => UI.addTaskToList(task));
  }

  static addTaskToList(task) {
    const todoList = document.querySelector('.tasks');

    // Create a new list item
    const listItem = document.createElement('div');
    // Add classname to the list item
    listItem.classList.add('task');

    // Add id to the list item
    listItem.id = `task-${task.index}`;

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
  }

  static deleteTask(task) {
    const taskList = document.querySelector('.tasks');
    const taskItem = document.getElementById(`task-${task.index}`);
    taskList.removeChild(taskItem);
  }
}

document.addEventListener('DOMContentLoaded', UI.displayTasks);

// event listener for checkbox change
document.querySelector('.tasks').addEventListener('change', (e) => {
  Store.changeTaskStatus(e);
});
