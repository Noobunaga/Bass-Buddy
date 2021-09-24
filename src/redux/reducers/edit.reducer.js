const editLure = (state = {image:'', description:'', weather:'', wind:'', depth:'', clarity:'', temperature:'', habitat:''}, action) => {
    switch (action.type) {
        case 'EDIT_LURE':
            return action.payload;
        default:
            return state;
    }
}

export default editLure;