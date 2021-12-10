/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import addTask from "../_mocks_/addTask";
import localStorageMock from "../_mocks_/localStorageMock";

describe('Add new task to the list of event', () => {
  const task  = [];
  test ('Add an entry to the event task list', () => {
    document.body.innerHTML = `<input id='input-box' value='complete-project'/>`
    addTask(task)
    expect(task).toHaveLength(1);
    expect(task).toBeTruthy();
  });
   test('Local Storage should be updated for every event input', () => {
    expect(localStorageMock.getItem('eventTask')).toHaveLength(1);
   });
   test ('Add a second entry to the event task list', () => {
    document.body.innerHTML = `<input id='input-box' value='complete-second'/>`
    addTask(task)
    expect(task[1].index).toBe(2);
    expect(task[1]).toBeTruthy();
  });
});