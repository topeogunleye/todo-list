import updateStatus from '../_mocks_/updateStatus';

describe('Update completed status of task', () => {

  it('should update completed status of task', () => {
    const task = {
      id: 1,
      title: 'task',
      completed: false
    };
    const updatedTask = updateStatus(task);
    expect(updatedTask.completed).toBe(true);
  });

});