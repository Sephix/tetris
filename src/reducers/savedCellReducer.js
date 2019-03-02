import {GAME_RESTARTED, REFRESH_SAVED_CELL} from "../actions/types";
import {blank} from "../game/cellCollection";

export default (state = blank, action) => {
    switch (action.type) {
        case REFRESH_SAVED_CELL:
            return action.payload.map(row => row.map( square => square));
        case GAME_RESTARTED:
            return blank;
        default:
            return state;
    }
};
