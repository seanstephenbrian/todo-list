import { setBodyHeight, setBodyWidth } from './body.js';
import { renderHeaderFooter, renderNow, renderLater, renderAll } from './page.js';

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

export { addInitialListeners };