import { SET_FILTER } from "src/filter/actionTypes";
import { FilterType } from "src/filter/types";

interface SetFilter {
    type: SET_FILTER,
    filter: FilterType
}

export const setFilter = (filter: FilterType): SetFilter => ({
    type: SET_FILTER,
    filter
});

export type FilterAction = SetFilter;