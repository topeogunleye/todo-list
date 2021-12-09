const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><ul class="d-flex todo-lists"></ul>`); // eslint-disable-line const { document } = dom.window;
/**
 * @jest-environment jsdom
 */

import UI from './UI.js';

const ui = new UI();

describe('Add and remove', () => {
  describe('Add one new item to the list', () => {
    // Create a new list item
    const listItem = document.createElement('div');

    // Add HTML to the list item
    listItem.innerHTML = `
   <input 
     type="checkbox"
   />
   <input type="text"  class="text-field">
   <p class="d-none"></p>
<i class="fa fa-trash todo-icon deleteTask delete-task" aria-hidden="true"></i>

   `;

    ui.addTaskToList(listItem);

    const list = document.querySelectorAll('.task');

    expect(list).toHaveLength(1);
  });
});
