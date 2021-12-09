/* eslint-disable */
import StoreMock from "./StoreMock";

function addTask(task) {
  const newTask = {
    description: document.getElementById('input-box').value,
    completed: false,
    index: task.length + 1,
  };
  task.push(newTask);
  StoreMock.setItem('eventTask', task);
}

export default addTask;