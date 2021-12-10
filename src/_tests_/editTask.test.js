import editTask from '../_mocks_/editTask';

// Test: Edit Task

describe('Edit a task in local storage', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify([
      {
        id: 1,
        title: 'Task 1',
        description: 'Task 1 description',
        status: 'incomplete',
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Task 2 description',
        status: 'incomplete',
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Task 3 description',
        status: 'incomplete',
      },
    ]));
  });

  it('should edit a task in local storage', () => {
    const task = {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      status: 'incomplete',
    };
    const newTask = {
      id: 1,
      title: 'Task 1 edited',
      description: 'Task 1 description edited',
      status: 'incomplete',
    };

    editTask(task, newTask);

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[0].title).toEqual('Task 1 edited');
    expect(tasks[0].description).toEqual('Task 1 description edited');
  });
});
