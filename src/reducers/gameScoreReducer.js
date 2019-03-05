import {GAME_RESTARTED, GAME_SCORE} from "../actions/types";

export default (state = 0, action) => {
    switch (action.type) {
        case GAME_SCORE:
            return action.payload;
        case GAME_RESTARTED:
            return 0;
        default:
            return state;
    }
};
