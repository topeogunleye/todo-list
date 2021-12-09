/* eslint-disable */
import StoreMock from "./StoreMock";

function addTask(todos) {
  const newTask = {
    description: document.getElementById('input-box').value,
    completed: false,
    index: todos.length + 1,
  };
  todos.push(newTask);
  StoreMock.setItem('todo', todos);
}

export default addTask;