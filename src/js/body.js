// set body height to exactly the inner height of the browser on narrow (likely mobile) screens:
const setBodyHeight = () => {
    const wrapper = document.querySelector('.wrapper');
    if (window.innerWidth < 751) {
        wrapper.style.minHeight = window.innerHeight + "px";
    } else {
        wrapper.style.minHeight = '100vh';
    }
};

// set body width to exactly the inner width of the browser:
const setBodyWidth = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.maxWidth = window.innerWidth + "px";
};

// workaround to check for safari landscape orientation:
const checkForLandscape = () => {
    if (window.innerWidth > window.innerHeight) {
        setBody();
    }
}

const setBody = () => {
    setBodyHeight();
    setBodyWidth();
    setTimeout(setBody, 1000);
};

export { setBodyHeight, setBodyWidth, setBody, checkForLandscape };