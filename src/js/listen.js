import { setBodyHeight, setBodyWidth } from './body.js';

// event listeners to add when the page first loads:
const addInitialListeners = () => {

    // set initial body height/width, then adjust body height & width if needed whenever the window is resized:
    setBodyHeight();
    setBodyWidth();
    window.addEventListener('resize', () => {
        setBodyHeight();
        setBodyWidth();
    });
}

export { addInitialListeners };