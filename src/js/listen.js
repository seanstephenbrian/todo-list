import { setBody } from './body.js';
import { 
    renderNow, 
    renderLater, 
    renderAll, 
    expandItem,
    shrinkItem, 
    getCurrentView,
    checkCheckbox,
    uncheckCheckbox,
    renderAddForm,
    styleRadioOption,
    submitAddForm,
    removeAddForm, 
    switchToLight,
    switchToDark,
    showEditPopup,
    submitEditForm,
    removeEditForm } from './page.js';
import { deleteTodo, editTodo, getCompleted } from './list.js';

// event listeners to add when the page first loads:
const addInitialListeners = () => {

    // set initial body height & width..
    setBody();

    // then adjust body height & width if needed whenever the window is resized, or when the screen orientation changes:
    window.addEventListener('resize', setBody);
    // if browser is not safari:
    if (!(navigator.userAgent.indexOf("Safari") != -1 )) {
        screen.orientation.addEventListener('change', setBody);
    }
    
    // add click listeners to nav buttons to trigger render functions:
    const now = document.querySelector('.now');
    now.addEventListener('click', renderNow);

    const later = document.querySelector('.later');
    later.addEventListener('click', renderLater);

    const all = document.querySelector('.all');
    all.addEventListener('click', renderAll);

    // add listeners to light/dark mode display icons:
    const lightIcon = document.querySelector('.light-mode');
    lightIcon.addEventListener('click', switchToLight);

    const darkIcon = document.querySelector('.dark-mode');
    darkIcon.addEventListener('click', switchToDark);

}

const addAddListener = () => {
    const addButton = document.querySelector('.add-item-button');
    addButton.addEventListener('click', renderAddForm);
}

const addFormListeners = () => {

    // add close button listener:
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', removeAddForm);

    // add radio input listeners:
    const radioInputs = document.querySelectorAll('.radio-input');
    radioInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            styleRadioOption(e);
        });
    });

    // add submit listener:
    const form = document.querySelector('.add-form-itself');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitAddForm();
    });
}

const addEditFormListeners = () => {

    // add close button listener:
    const closeButton = document.querySelector('.edit-close-button');
    closeButton.addEventListener('click', removeEditForm);

    // add radio input listeners:
    const radioInputs = document.querySelectorAll('.radio-input');
    radioInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            styleRadioOption(e);
        });
    });

    // add submit listener:
    const form = document.querySelector('.edit-form-itself');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitEditForm(e);
    });
}

// event listeners to open expanded view of items:
const addExpandListeners = () => {

    // add listeners to all item title text:
    const itemTitles = document.querySelectorAll('.expandable-title');
    itemTitles.forEach(title => {
        title.addEventListener('click', expandItem);
    });

    // add listeners to all expand icons:
    const expandIcons = document.querySelectorAll('div.expand');
    expandIcons.forEach(icon => {
        icon.addEventListener('click', expandItem);
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

// edit icon listener to add to each item as it is rendered:
const addEditIconListener = (id) => {
    const itemToEdit = document.querySelector(`[data-id='${id}'`);
    const editIcon = itemToEdit.children[2].firstChild;
    editIcon.addEventListener('click', showEditPopup);
}

const addDeleteListenerToItemWithoutDescription = (deleteIcon, id) => {
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

    // add listener to shrink icon:
    const icon = parentItem.children[3];
    icon.addEventListener('click', (e) => {
        shrinkItem(e);
    });
}

// remove click listeners from an expanded item as they are no longer necessary:
const removeListenersFromExpandedItem = (id) => {
    const item = document.querySelector(`[data-id='${id}'`);
    const itemTitle = item.children[1];
    itemTitle.removeEventListener('click', expandItem);
    const itemIcon = item.children[2];
    itemIcon.removeEventListener('click', expandItem);
}

// function to attach new expand click listener on item elements -- this is necessary because the listeners are removed when the item expands.
const replaceExpandListener = (element) => {
    element.addEventListener('click', expandItem);
}

export { 
    addInitialListeners, 
    addExpandListeners, 
    addListenersToExpandedItem,
    removeListenersFromExpandedItem,
    addCheckboxListener,
    replaceExpandListener,
    addAddListener,
    addEditFormListeners,
    addFormListeners,
    addDeleteListenerToItemWithoutDescription,
    addEditIconListener
}