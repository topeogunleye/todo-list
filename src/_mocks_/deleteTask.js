/* eslint-disable */
import localStorageMock from "./localStorageMock";

function deleteTask(eventTask, task) {
  let index = eventTask.index
  const currentEventTasks = task.filter(eventTask => eventTask.index !== index);
  task.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorageMock.setItem('eventTask', currentEventTasks);
  return currentEventTasks
}
export default deleteTask