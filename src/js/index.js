import '../style.css';

import { retrieveStoredList } from './list.js';
import { 
    renderPage, 
    renderStoredView, 
    retrieveStoredDisplayMode } from './page.js';
import { addInitialListeners } from './listen.js';
import { setBody } from './body';

renderPage();

setBody();

addInitialListeners();

retrieveStoredList();

renderStoredView();

retrieveStoredDisplayMode();