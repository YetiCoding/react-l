import { ALL, FilterType } from './types';
import { FilterAction } from './actions';
import { SET_FILTER } from './actionTypes';
export default (state: FilterType = ALL, action: FilterAction) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}