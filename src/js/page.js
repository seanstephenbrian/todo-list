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
    // create new array of items with a 'now' priority:
    const nowItems = getNow();
    // create new <div> for each 'now' item & add it to main content section:
    nowItems.forEach(item => {
        const displayedItem = document.createElement('div');
        main.appendChild(displayedItem);
        displayedItem.textContent = item.title;
    });
}

const renderLater = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';
    // create new array of items with a 'later' priority:
    const laterItems = getLater();
    // create new <div> for each 'later' item & add it to main content section:
    laterItems.forEach(item => {
        const displayedItem = document.createElement('div');
        main.appendChild(displayedItem);
        displayedItem.textContent = item.title;
    });
}

const renderAll = () => {
    // empty out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';
    // create an array of all current items:
    const allItems = getAll();
    // create new <div> for each item & add it to main content section:
    allItems.forEach(item => {
        const displayedItem = document.createElement('div');
        main.appendChild(displayedItem);
        displayedItem.textContent = item.title;
    });
}

export { renderHeaderFooter, renderNow, renderLater, renderAll }