import { combineReducers } from 'redux';
import { createStore } from 'redux';

const initialState = {
    value: ''
}

export const FromReducer = (state, action) => {
    switch (action.type) {
        case SEND:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
}
export const store = createStore(FromReducer, initialState)

//storeに渡す際に一つにまとめる必要がある
export const reducer = combineReducers({
    FromReducer
});