import '../style.css';

import { retrieveStoredList } from './list.js';

import { renderHeaderFooter, renderNow, styleLightIcon, switchToLight } from './page.js';

import { addInitialListeners } from './listen.js';

renderHeaderFooter();

addInitialListeners();

retrieveStoredList();

renderNow();

// set light mode as default:
switchToLight();
styleLightIcon();