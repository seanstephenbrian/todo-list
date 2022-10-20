import '../style.css';

import { createTodo, getAll, getNow, getLater, deleteTodo, editTodo } from './list.js';

import { renderHeaderFooter, renderNow, renderLater, renderAll } from './page.js';

import { addInitialListeners } from './listen.js';

renderHeaderFooter();

addInitialListeners();

createTodo('todo 1 title','todo 1 description', 'now', false);

createTodo('todo 2 title','todo 2 description', 'now', false);

createTodo('todo 3 title','todo 3 description', 'later', false);

createTodo('todo 4 title','todo 4 description', 'now', false);

createTodo('todo 5 title','todo 5 description', 'later', false);

console.log(getAll());

const body = document.querySelector('body');
body.addEventListener('click', () => {
    editTodo('todo 4 title','title','a new title');
    console.log(getAll());
});