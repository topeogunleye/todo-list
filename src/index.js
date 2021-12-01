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



// event listener for checkbox change
document.querySelector('.tasks').addEventListener('change', (e) => {
  Store.changeTaskStatus(e);
});
