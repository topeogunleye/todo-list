class statusUpdates {
  static updateStatus(task, status) {
    if (status === 'completed') {
      task.completed = true;
    } else {
      task.completed = false;
    }
  }
}

export default statusUpdates;