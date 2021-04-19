import constants from './constants';

export const setSearchValueState = val => dispatch => {
    return dispatch({ type: constants.SET_SEARCH_VALUE, val: val });
};