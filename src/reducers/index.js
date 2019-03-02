import { combineReducers } from "redux";

import gridReducer from './gridReducer';
import nextCellReducer from './nextCellReducer';
import savedCellReducer from './savedCellReducer';
import gameStateReducer from "./gameStateReducer";

export default combineReducers({
    grid: gridReducer,
    nextCell: nextCellReducer,
    savedCell: savedCellReducer,
    gameState: gameStateReducer
});