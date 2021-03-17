const setReadmoreButtons = () => {
    const PARENT_DATAATTR = 'hiding';
    const REVEALER_DATAATTR = 'revealer';

    const parents = document.querySelectorAll(`[data-${PARENT_DATAATTR}]`);

    for (let parent of parents) {
        parent.addEventListener('click', event => {
            if (event.target.dataset[REVEALER_DATAATTR] !== undefined) {
                const newValue = parent.dataset[PARENT_DATAATTR] === "true" ? false : true;
                parent.dataset[PARENT_DATAATTR] = newValue;
            }
        });
    }
};

window.onload = () => {
    setReadmoreButtons();
};