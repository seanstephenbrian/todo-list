import { createTodo, getAll, getNow, getLater, getDescription, deleteTodo, editTodo } from './list.js';
import { addExpandListeners, addListenersToExpandedItem } from './listen.js';
import CheckedCheckboxIcon from '../img/checked-checkbox.svg';
import EmptyCheckboxIcon from '../img/empty-checkbox.svg';
import ExpandIcon from '../img/expand.svg';
import ShrinkIcon from '../img/shrink.svg';
import DeleteIcon from '../img/delete.svg';

// create currentView variable to track the current page display:
let currentView;

// generate base page structure:
const renderHeaderFooter = () => {

    // create header:
    const header = document.createElement('header');
    document.body.appendChild(header);

        // create title bar:
        const title = document.createElement('div');
        title.classList.add('title');
        header.appendChild(title);
        title.textContent = 'NOW // LATER :: a simple to-do list';

        // create nav bar:
        const nav = document.createElement('div');
        nav.classList.add('nav');
        header.appendChild(nav); 

            // create nav buttons:
            const now = document.createElement('div');
            now.classList.add('now');
            now.classList.add('selected');
            now.textContent = 'now';
            nav.appendChild(now);

            const later = document.createElement('div');
            later.classList.add('later');
            later.textContent = 'later';
            nav.appendChild(later);

            const all = document.createElement('div');
            all.classList.add('all');
            all.textContent = 'all';
            nav.appendChild(all);

    // create main to-do list display section:
    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    // create footer:
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    footer.textContent = 'copyright © 2022 | sean stephen brian';

}

const renderNow = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // create array of only items with a 'now' priority:
    const nowItems = getNow();

    renderItems(nowItems);

    updateCurrentView('now');
}

const renderLater = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // create array of only items with a 'later' priority:
    const laterItems = getLater();

    renderItems(laterItems);

    updateCurrentView('later');
}

const renderAll = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';
    // create an array of all current items:
    const allItems = getAll();
 
    renderItems(allItems);

    updateCurrentView('all');
}

const renderItems = (selectedItems) => {

    // create reference to main content section and current complete to-do list:
    const main = document.querySelector('.main');
    const allItems = getAll();

    // create new <div> for each item:
    selectedItems.forEach(item => {
        const displayedItem = document.createElement('div');
        displayedItem.classList.add('displayed-item');

        // set dataset.id to item's index in the main array:
        displayedItem.dataset.id = allItems.indexOf(item);

            // create <div>s for checkbox icons:
            const checkbox = document.createElement('div');
            checkbox.classList.add('checkbox');

                // check if item is completed to determine whether to insert an empty or checked checkbox svg:
                if (item.completed === true) {
                    const checkedCheckbox = document.createElement('img');
                    checkedCheckbox.setAttribute('src', CheckedCheckboxIcon);
                    checkbox.appendChild(checkedCheckbox);
                    displayedItem.classList.add('completed-item');
                } else if (item.completed === false) {
                    const emptyCheckbox = document.createElement('img');
                    emptyCheckbox.setAttribute('src', EmptyCheckboxIcon);
                    checkbox.appendChild(emptyCheckbox);
                    displayedItem.classList.add('incomplete-item');
                }

            displayedItem.appendChild(checkbox);

            // create <div>s for item title text:
            const title = document.createElement('div');
            title.textContent = item.title;
            title.classList.add('item-title');
            displayedItem.appendChild(title);

            // create <div>s for expand icons:
            const expand = document.createElement('div');
            expand.classList.add('expand');
            const expandIcon = document.createElement('img');
            expandIcon.setAttribute('src', ExpandIcon);
            expand.appendChild(expandIcon);
            displayedItem.appendChild(expand);

        // add item <div> to the main content section:
        main.appendChild(displayedItem);
    });

    // add click listeners on title text & expand icons of all just-rendered items:
    addExpandListeners();

}

const expandItem = (e) => {

    // first, create reference to clicked element to help us determine the item to expand:
    const clickedElement = e.target;
    let itemToExpand;
    // if the title text was clicked, this is true and the parent <div> is the item we want to expand:
    if (clickedElement.parentNode.classList.contains('displayed-item')) {
        itemToExpand = e.target.parentNode;
    // otherwise, the expand icon svg was clicked and we need to ascend another layer in the DOM to get the <div> of the item we want to expand:
    } else {
        itemToExpand = e.target.parentNode.parentNode;
    }
    itemToExpand.classList.add('expanded-item');

    // save reference to itemToExpand's data-id:
    const itemId = itemToExpand.dataset.id;

    // grab reference to expand icon, add a new shrink icon before it, and delete the expand icon:
    const expand = itemToExpand.children[2];
    const shrink = document.createElement('div');
    shrink.classList.add('shrink');
    const shrinkIcon = document.createElement('img');
    shrinkIcon.setAttribute('src', ShrinkIcon);
    shrink.appendChild(shrinkIcon);
    itemToExpand.insertBefore(shrink, expand);
    expand.remove();

    // create new <div> for item description and get text from todoList array:
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = getDescription(itemId);
    itemToExpand.appendChild(itemDescription);
    
    // create new <div> for delete icon and add delete svg as a child <img>:
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete');
    const deleteIconSvg = document.createElement('img');
    deleteIconSvg.setAttribute('src', DeleteIcon);
    deleteIcon.appendChild(deleteIconSvg);
    itemToExpand.appendChild(deleteIcon);

    addListenersToExpandedItem(itemId);
}

const updateCurrentView = (page) => {
    currentView = page;
}

const getCurrentView = () => {
    return currentView;
}

export { 
    renderHeaderFooter, 
    renderNow, 
    renderLater, 
    renderAll, 
    expandItem, 
    updateCurrentView, 
    getCurrentView 
}