import {GAME_SCORE} from "../actions/types";

export default (state = 0, action) => {
    switch (action.type) {
        case GAME_SCORE:
            return action.payload;
        default:
            return state;
    }
};
