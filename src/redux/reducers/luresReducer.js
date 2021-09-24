import { combineReducers } from "redux";


const luresReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LURES':
            return state = [...state, action.payload];
        case 'SET_LURES':
            return action.payload;
        default:
            return state;
    };
};

const userLuresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER':
            return state = [...state, action.payload];
        default:
            return state;
    }
}



export default combineReducers({
    luresReducer,
    userLuresReducer,
  });
  

  