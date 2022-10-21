import { setBodyHeight, setBodyWidth } from './body.js';
import { renderHeaderFooter, renderNow, renderLater, renderAll, expandItem } from './page.js';

// event listeners to add when the page first loads:
const addInitialListeners = () => {

    // set initial body height & width..
    setBodyHeight();
    setBodyWidth();
    // then adjust body height & width if needed whenever the window is resized:
    window.addEventListener('resize', () => {
        setBodyHeight();
        setBodyWidth();
    });

    // add click listeners to nav buttons to trigger render functions:
    const now = document.querySelector('.now');
    now.addEventListener('click', () => {
        renderNow();
    });

    const later = document.querySelector('.later');
    later.addEventListener('click', () => {
        renderLater();
    });

    const all = document.querySelector('.all');
    all.addEventListener('click', () => {
        renderAll();
    });
}

// event listeners to expand view of items:
const addExpandListeners = () => {

    // add listeners to all item title text:
    const itemTitles = document.querySelectorAll('.item-title');
    itemTitles.forEach(title => {
        title.addEventListener('click', (e) => {
            expandItem(e);
        });
    });

    // add listeners to all expand icons:
    const expandIcons = document.querySelectorAll('div.expand');
    expandIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            expandItem(e);
        });
    });
}

export { addInitialListeners, addExpandListeners };