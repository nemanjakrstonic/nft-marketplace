import constants from '../actions/constants';

const initialState = {
    searchValueState: ''
};

const expReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValueState: action.val
            };
        default:
            return state;
    }
}
export default expReducer;