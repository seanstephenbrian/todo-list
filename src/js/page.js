// generate base page structure:
const renderPage = () => {
    // create header:
    const header = document.createElement('header');
    document.body.appendChild(header);

    // create nav buttons:
    const nav = document.createElement('div');
    nav.classList.add('nav');
    document.body.appendChild(nav);

    // create main to-do list display section:
    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    // create footer:
    const footer = document.createElement('footer');
    document.body.appendChild(footer);

}

export { renderPage }