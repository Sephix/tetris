import {GAME_LEVEL, GAME_RESTARTED} from "../actions/types";

export default (state = 1, action) => {
    switch (action.type) {
        case GAME_LEVEL:
            return action.payload;
        case GAME_RESTARTED:
            return 1;
        default:
            return state;
    }
};
