import statusUpdates from './statusUpdates.js';

// Store Class: Handles localStorage
export default class Store {
  static getTasks() {
    const tasks = localStorage.getItem('tasks');
    if (localStorage.getItem('tasks') !== null) {
      // if there are tasks in localStorage
      return JSON.parse(tasks); // return tasks
    }
    return []; // return empty array
  }

  /**
   * @function addTask - instance method that adds new task to local storage
   * @param {Object} task - a task object with keys: {description, completed, and index}
   */
  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * @function changeTaskStatus - handles the checkbox event listener
   * @param {Event Object} el - The event target
   */
  static changeTaskStatus(el) {
    const TASKS = Store.getTasks();

    const task = TASKS.find(
      (t) => t.index === parseInt(el.id.split('-')[1], 10),
    );
    if (el.checked) {
      statusUpdates.updateStatus(task, 'completed');
    } else {
      statusUpdates.updateStatus(task, 'uncompleted');
    }

    localStorage.setItem('tasks', JSON.stringify(TASKS));
  }

  /**
   * @function removeTask - The remove function to remove a task from local storage
   * @param {string} id - The event target previous element sibling text content
   */
  static removeTask(id) {
    let tasks = Store.getTasks();
    tasks = tasks.filter((task) => task.index !== parseInt(id, 10));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * @function updateTasksIndex - instance method that updates the index of all tasks
   */
  static updateTasksIndex() {
    const tasks = Store.getTasks();
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * @function clearCompletedTasks - instance method that clears all completed tasks
   */
  // clear all completed tasks from localStorage
  static clearCompletedTasks() {
    let tasks = Store.getTasks();
    tasks = tasks.filter((task) => task.completed !== true);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * @function getCompletedTasks - instance method that returns all completed tasks
   */
  static getCompletedTasks() {
    const tasks = Store.getTasks();
    return tasks.filter((task) => task.completed === true);
  }
}
