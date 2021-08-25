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

const editLure = (state = {image:'', description:'', weather:'', wind:'', depth:'', clarity:'', temperature:'', habitat:''}, action) => {
    switch (action.type) {
        case 'EDIT_LURE':
            return action.payload;
        default:
            return state;
    }
}

const lureDetail = (state = [0], action) => {
    if(action.type === 'SET_LURE_DETAILS'){
        return state = action.payload
    }
    return state;
}

export default combineReducers({
    luresReducer,
    userLuresReducer,
    editLure,
    lureDetail,
  });
  

  