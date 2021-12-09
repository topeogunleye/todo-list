/* eslint-disable */
import StoreMock from "./StoreMock";

function deleteTask(todo, todos) {
  let index = todo.index
  const currentTasks = todos.filter(todo => todo.index !== index);
  todos.forEach((object, index) => {
    object.index = index + 1;
  });
  StoreMock.setItem('todo', currentTasks);
  return currentTasks
}
export default deleteTask