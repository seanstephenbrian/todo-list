import { setBodyHeight, setBodyWidth } from './body.js';
import { renderHeaderFooter, renderNow, renderLater, renderAll, expandItem, getCurrentView } from './page.js';
import { deleteTodo } from './list.js';

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

// event listeners to open expanded view of items:
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

// event listeners (for delete and shrink actions) to add to an item when it is expanded:
const addListenersToExpandedItem = (id) => {

    // add listener to delete icon:
    const deleteIcon = document.querySelector('.delete');
    deleteIcon.addEventListener('click', () => {
        // delete item:
        deleteTodo(id);
        // then check the user's current page before re-rendering:
        const currentView = getCurrentView();
        if (currentView === 'now') {
            renderNow();
        } else if (currentView === 'later') {
            renderLater();
        } else if (currentView === 'all') {
            renderAll();
        }
    });


}

export { addInitialListeners, addExpandListeners, addListenersToExpandedItem };