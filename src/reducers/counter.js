const counter = (value=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return value + 1;
        case 'DECREMENT':
            return value - 1;
        default:
            return value;
    }
};

export default counter
