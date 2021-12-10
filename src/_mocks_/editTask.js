// import localStorageMock from './localStorageMock';

// Edit a task from local storage
const editTask = (task, newTask) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((t) => t.id === task.id);
  tasks[index] = newTask;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default editTask;