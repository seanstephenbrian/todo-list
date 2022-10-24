import '../style.css';

import { retrieveStoredList } from './list.js';

import { renderHeaderFooter, renderNow } from './page.js';

import { addInitialListeners } from './listen.js';

renderHeaderFooter();

addInitialListeners();

retrieveStoredList();

renderNow();