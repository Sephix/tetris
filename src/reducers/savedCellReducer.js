import {blank} from "../game/cellCollection";

export default (state = blank, action) => {
    switch (action.type) {
        case 'REFRESH_SAVED_CELL':
            return action.payload.map(row => row.map( square => square));
        default:
            return state;
    }
};
