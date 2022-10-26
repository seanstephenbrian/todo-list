// set body height to exactly the inner height of the browser on narrow (likely mobile) screens:
const setBodyHeight = () => {
    const body = document.querySelector('body');
    if (window.innerWidth < 751) {
        body.style.minHeight = window.innerHeight + "px";
    } else {
        body.style.minHeight = '100vh';
    }
};

// set body width to exactly the inner width of the browser:
const setBodyWidth = () => {
    const body = document.querySelector('body');
    const width = window.innerWidth;
    body.style.maxWidth = width + "px";
};

const setBody = () => {
    setBodyHeight();
    setBodyWidth();
};

export { setBodyHeight, setBodyWidth, setBody };