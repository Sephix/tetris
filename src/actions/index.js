export const refreshGrid= (grid) => {
    return {
        type: 'REFRESH_GRID',
        payload: grid
    }
};

export const refreshNextCell= (cell) => {
    return {
        type: 'REFRESH_NEXT_CELL',
        payload: cell
    }
};

export const refreshSavedCell= (cell) => {
    return {
        type: 'REFRESH_SAVED_CELL',
        payload: cell
    }
};
