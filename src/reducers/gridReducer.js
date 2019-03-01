import {GAME_BLANK} from "../game/settings";

export default (state = GAME_BLANK, action) => {
    switch (action.type) {
        case 'REFRESH_GRID':
            return action.payload.map(row => row.map( square => square));
        default:
            return state;
    }
};
