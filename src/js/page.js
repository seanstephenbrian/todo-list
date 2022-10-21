import { createTodo, getAll, getNow, getLater, deleteTodo, editTodo } from './list.js';

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

}

const renderLater = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // create array of current complete list for reference below:
    const allItems = getAll();

    // create array of only items with a 'later' priority:
    const laterItems = getLater();

    renderItems(laterItems);
}

const renderAll = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';
    // create an array of all current items:
    const allItems = getAll();
 
    renderItems(allItems);
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

            // create nested <div>s for checkbox, title, and expand icon:
            const checkbox = document.createElement('div');
            checkbox.classList.add('checkbox');
            displayedItem.appendChild(checkbox);
            const title = document.createElement('div');
            title.classList.add('item-title');
            displayedItem.appendChild(title);
            const expand = document.createElement('div');
            expand.classList.add('expand');
            displayedItem.appendChild(expand);

        // add item <div> to the main content section:
        main.appendChild(displayedItem);
    });
}

export { renderHeaderFooter, renderNow, renderLater, renderAll }