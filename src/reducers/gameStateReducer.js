import {GAME_LOST, GAME_STARTED, GAME_PAUSED, GAME_RESTARTED} from "../actions/types";

export default (state = '', action) => {
    switch (action.type) {
        case GAME_STARTED:
            return 'Jeu en cours...';
        case GAME_PAUSED:
            return 'En pause.';
        case GAME_LOST:
            return 'Perdu !';
        case GAME_RESTARTED:
            return '';
        default:
            return state;
    }
};
