import { setBodyHeight, setBodyWidth } from './body.js';
import { 
    renderNow, 
    renderLater, 
    renderAll, 
    expandItem, 
    getCurrentView,
    checkCheckbox,
    uncheckCheckbox 
    } from './page.js';
import { deleteTodo, editTodo, getCompleted } from './list.js';

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

// checkbox listener to add to each item as it is rendered:
const addCheckboxListener = (id) => {

    const parentItem = document.querySelector(`[data-id='${id}'`);
    const itemCheckbox = parentItem.firstChild;
    itemCheckbox.addEventListener('click', () => {

        // if todo is not completed, mark it as completed:
        const completedStatus = getCompleted(id);
        if (completedStatus === false) {
            editTodo(id, 'completed', true);
            // then change the DOM element's class & styling so the view doesn't have to be re-rendered:
            parentItem.classList.remove('incomplete-item');
            parentItem.classList.add('completed-item');
            // and check the box:
            checkCheckbox(itemCheckbox);

        // if todo is completed, mark it as incomplete:
        } else if (completedStatus === true) {
            editTodo(id, 'completed', false);
            parentItem.classList.remove('completed-item');
            parentItem.classList.add('incomplete-item');
            // and uncheck the box:
            uncheckCheckbox(itemCheckbox);
        }
    });

}

// event listeners (for delete and shrink actions) to add to an item when it is expanded:
const addListenersToExpandedItem = (id) => {

    // add listener to delete icon:
    const parentItem = document.querySelector(`[data-id='${id}'`);
    const deleteIcon = parentItem.lastChild;
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

export { 
    addInitialListeners, 
    addExpandListeners, 
    addListenersToExpandedItem,
    addCheckboxListener
}