const luresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LURES':
            return action.payload;
        default:
            return state;
    }
}

export default luresReducer;