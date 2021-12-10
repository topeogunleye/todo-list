/* eslint-disable */
import localStorageMock from "./localStorageMock";

function addTask(task) {
  const newTask = {
    description: document.getElementById('input-box').value,
    completed: false,
    index: task.length + 1,
  };
  task.push(newTask);
  localStorageMock.setItem('eventTask', task);
}

export default addTask;