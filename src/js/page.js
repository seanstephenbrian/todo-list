// generate base page structure:
const renderPage = () => {

    // create header:
    const header = document.createElement('header');
    document.body.appendChild(header);

        // create title bar:
        const title = document.createElement('div');
        title.classList.add('title');
        header.appendChild(title);
        // create repeated 'todo' text across title div:
        const todoText = 'todo';
        function repeatTodo() {
            var repeatedTodo = 'todo';
            for (let i=0; i<100; i++) {
                repeatedTodo += todoText;
            }
            return repeatedTodo;
        }
        title.textContent = repeatTodo();

        // create nav bar:
        const nav = document.createElement('div');
        nav.classList.add('nav');
        header.appendChild(nav); 

            // create nav buttons:
            const now = document.createElement('div');
            now.classList.add('now');
            now.textContent = 'NOW';
            nav.appendChild(now);

            const later = document.createElement('div');
            later.classList.add('later');
            later.textContent = 'LATER';
            nav.appendChild(later);

            const all = document.createElement('div');
            all.classList.add('all');
            all.textContent = 'ALL';
            nav.appendChild(all);

    // create main to-do list display section:
    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);
    main.textContent = 'main';

    // create footer:
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    footer.textContent = 'copyright © 2022 | sean stephen brian';

}

export { renderPage }