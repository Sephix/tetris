export default (state = [], action) => {
    switch (action.type) {
        case 'INPUT':
            console.log(action.payload);
            return state;
        default:
            return state;
    }
};