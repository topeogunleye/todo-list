/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import addTask from "../_mocks_/addItem";
import StoreMock from "../_mocks_/StoreMock";

describe('Add new task to the list', () => {
  const todos  = [];
  test ('Add an entry to the todo list', () => {
    document.body.innerHTML = `<input id='input-box' value='complete-project'/>`
    addTask(todos)
    expect(todos).toHaveLength(1);
  })
   test('Local Storage should be updated for every input', () => {
    expect(StoreMock.getItem('todo')).toHaveLength(1);
   })
   test ('Add a second entry to the todo list', () => {
    document.body.innerHTML = `<input id='input-box' value='complete-second'/>`
    addTask(todos)
    expect(todos[1].index).toBe(2);
  })
})