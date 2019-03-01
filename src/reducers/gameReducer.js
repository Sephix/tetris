export default (state = game, action) => {
    switch (action.type) {
        case 'INPUT':
            state.loop(action.payload);
            return state;
        case 'START':
            state.start();
            console.log(state.loop());
            return state;
        default:
            return state;
    }
};