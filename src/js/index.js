import '../style.css';

import { retrieveStoredList } from './list.js';
import { 
    renderHeaderFooter, 
    renderStoredView, 
    retrieveStoredDisplayMode } from './page.js';
import { addInitialListeners } from './listen.js';
import { setBody } from './body';

setBody();

renderHeaderFooter();

addInitialListeners();

retrieveStoredList();

renderStoredView();

retrieveStoredDisplayMode();