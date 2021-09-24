const lureDetail = (state = [], action) => {
    if(action.type === 'SET_LURE_DETAILS'){
        console.log(`lureDetail lureReducer, whats in state`, state);
        return action.payload
    }
    return state;
}

export default lureDetail;