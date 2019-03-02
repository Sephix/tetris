import {
    REFRESH_GRID,
    REFRESH_NEXT_CELL,
    REFRESH_SAVED_CELL,
    GAME_LOST,
    GAME_STARTED,
    GAME_PAUSED,
    GAME_RESTARTED
} from "./types";

export const refreshGrid = (grid) => {
    return {
        type: REFRESH_GRID,
        payload: grid
    }
};

export const refreshNextCell= (cell) => {
    return {
        type: REFRESH_NEXT_CELL,
        payload: cell
    }
};

export const refreshSavedCell = (cell) => {
    return {
        type: REFRESH_SAVED_CELL,
        payload: cell
    }
};

export const gameStarted = () => {
    return {
        type: GAME_STARTED
    }
};

export const gamePaused = () => {
    return {
        type: GAME_PAUSED
    }
};

export const gameLost = () => {
    return {
        type: GAME_LOST
    }
};

export const gameRestart = () => {
    return {
        type: GAME_RESTARTED
    }
};

