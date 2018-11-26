import {ADD_PLACE, DELELTE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes';
export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName
    };
}
export const deletePlace = () => {
    return {
        type: DELELTE_PLACE
    };
}
export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        key
    };
}
export const deSelectPlace = () => {
    return {
        type: DESELECT_PLACE
    };
}