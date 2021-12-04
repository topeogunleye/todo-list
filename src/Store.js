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

  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static changeTaskStatus(e) {
    const TASKS = Store.getTasks();

    const task = TASKS.find(
      (t) => t.index === parseInt(e.target.id.split('-')[1], 10),
    );
    if (e.target.checked) {
      statusUpdates.updateStatus(task, 'completed');
    } else {
      statusUpdates.updateStatus(task, 'uncompleted');
    }

    localStorage.setItem('tasks', JSON.stringify(TASKS));
  }

  static removeTask(id) {
    let tasks = Store.getTasks();
    tasks = tasks.filter((task) => task.index !== parseInt(id, 10));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateTasksIndex() {
    const tasks = Store.getTasks();
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // clear all completed tasks from localStorage
  static clearCompletedTasks() {
    let tasks = Store.getTasks();
    tasks = tasks.filter((task) => task.completed !== true);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static getCompletedTasks() {
    const tasks = Store.getTasks();
    return tasks.filter((task) => task.completed === true);
  }
}