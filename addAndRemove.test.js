/**
 * @jest-environment jsdom
 */

import UI from './src/UI.js';

const ui = new UI();

describe('Add and remove', () => {
  describe('Add one new item to the list', () => {
    // Create a new list item
    const listItem = document.createElement('div');

    // Add HTML to the list item
    listItem.innerHTML = `
   <input 
     type="checkbox"
      id="task-${task.index}"
   />
   <input type="text" value="${task.description}" class="text-field">
   <p class="d-none">${task.index}</p>
<i class="fa fa-trash todo-icon deleteTask delete-task" aria-hidden="true"></i>

   `;

    ui.addTaskToList(listItem);

    const list = document.querySelectorAll('.task');

    expect(list).toHaveLength(1);
  });
});
