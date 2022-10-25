// set body height to exactly the inner height of the browser on narrow (likely mobile) screens:
const setBodyHeight = () => {
    if (window.innerWidth < 751) {
        document.body.style.minHeight = window.innerHeight + "px";
    } else {
        document.body.style.minHeight = '100vh';
    }
};

// set body width to exactly the inner width of the browser:
const setBodyWidth = () => {
    document.body.style.maxWidth = window.innerWidth + "px";
};

const setBody = () => {
    setBodyHeight();
    setBodyWidth();
};

export { setBodyHeight, setBodyWidth, setBody };