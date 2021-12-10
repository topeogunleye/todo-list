import localStorageMock from './localStorageMock';

// clear All Completed
const clearCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed !== true);
  localStorageMock.setItem('tasks', JSON.stringify(tasks));
};

export default clearCompletedTasks;