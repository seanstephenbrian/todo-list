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
    return getNow();
}

const renderLater = () => {
    return getLater();
}

const renderAll = () => {
    return getAll();
}

export { renderHeaderFooter, renderNow, renderLater, renderAll }