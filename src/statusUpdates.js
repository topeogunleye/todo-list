export class statusUpdates {
  static toggleTask(task) {
    task.classList.toggle('completed');
  }

  static removeTask(task) {
    task.remove();
  }

  static updateStatus(task, status) {
    if (status === 'completed') {
      task.completed = true;
    } else {
      task.completed = false;
    }

    console.log(task, status)
  }
}