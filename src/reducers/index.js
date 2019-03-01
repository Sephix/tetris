import { combineReducers } from "redux";

import gridReducer from './gridReducer';
import nextCellReducer from './nextCellReducer';
import savedCellReducer from './savedCellReducer';

export default combineReducers({
    grid: gridReducer,
    nextCell: nextCellReducer,
    savedCell: savedCellReducer
});