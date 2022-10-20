import { createTodo, getList, deleteTodo, editTodo } from './list.js';

import { renderPage } from './page.js';

import { addInitialListeners } from './listen.js';

renderPage();

addInitialListeners();