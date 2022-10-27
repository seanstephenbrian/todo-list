import '../style.css';

import { retrieveStoredList } from './list.js';
import { 
    renderPage, 
    renderStoredView, 
    retrieveStoredDisplayMode } from './page.js';
import { addInitialListeners } from './listen.js';
import { setBodyHeight } from './body';

renderPage();

addInitialListeners();

retrieveStoredList();

renderStoredView();

retrieveStoredDisplayMode();