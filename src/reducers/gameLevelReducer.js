import {GAME_LEVEL} from "../actions/types";

export default (state = 1, action) => {
    switch (action.type) {
        case GAME_LEVEL:
            return action.payload;
        default:
            return state;
    }
};
