/* eslint-disable */
import StoreMock from "./StoreMock";

function deleteTask(eventTask, task) {
  let index = eventTask.index
  const currentEventTasks = task.filter(eventTask => eventTask.index !== index);
  task.forEach((object, index) => {
    object.index = index + 1;
  });
  StoreMock.setItem('eventTask', currentEventTasks);
  return currentEventTasks
}
export default deleteTask