/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import deleteTask from "../_mocks_/deleteTask";

describe('remove a task from the list', () => {
  const task = [
    {
      description: 'Go Swimming',
      status: false,
      index: '1',
    },
    {
      description: 'Go Shopping',
      status: false,
      index: '2',
    },
    {
      description: 'Play video games',
      status: false,
      index: '3',
    }
  ]
  test ('remove an entry from the event task list', () => {
    let eventTask = task[1]
    expect(deleteTask(eventTask, task)).toHaveLength(2)
  })
})