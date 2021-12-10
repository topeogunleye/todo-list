// Test:  Clear All Completed
import clearCompletedTasks from '../_mocks_/clearAllCompleted';
import localStorageMock from '../_mocks_/localStorageMock';

describe('Clear All Completed', () => {
  test('Clear all completed tasks', () => {
    // localStorageMock.clear();

    const tasks = [
      {
        id: 1,
        title: 'Task 1',
        completed: false,
      },
      {
        id: 2,
        title: 'Task 2',
        completed: false,
      },
      {
        id: 3,
        title: 'Task 3',
        completed: false,
      },
      {
        id: 4,
        title: 'Task 4',
        completed: false,
      },
      {
        id: 5,
        title: 'Task 5',
        completed: false,
      },
      {
        id: 6,
        title: 'Task 6',
        completed: true,
      },

    ];

    localStorageMock.setItem('tasks', JSON.stringify(tasks));

    clearCompletedTasks(tasks);

    expect(localStorageMock.getItem('tasks')).toBe(
      JSON.stringify([
        {
          id: 1,
          title: 'Task 1',
          completed: false,
        },
        {
          id: 2,
          title: 'Task 2',
          completed: false,
        },
        {
          id: 3,
          title: 'Task 3',
          completed: false,
        },
        {
          id: 4,
          title: 'Task 4',
          completed: false,
        },
        {
          id: 5,
          title: 'Task 5',
          completed: false,
        },
      ]),
    );
  });
});
