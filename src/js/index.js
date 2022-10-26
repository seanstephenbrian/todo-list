import '../style.css';

import { retrieveStoredList } from './list.js';

import { renderHeaderFooter, renderStoredView, retrieveStoredDisplayMode } from './page.js';

import { addInitialListeners } from './listen.js';

renderHeaderFooter();

addInitialListeners();

retrieveStoredList();

renderStoredView();

retrieveStoredDisplayMode();