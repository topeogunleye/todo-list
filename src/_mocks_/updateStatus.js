// update completed status of tasks
const updateStatus = (task) => {
  task.completed = !task.completed;
  return task;
};

export default updateStatus;