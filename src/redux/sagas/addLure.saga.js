import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

function* addLure(action) {
    const lure = action.payload;
    console.log(lure);
    try {
        yield call (axios.post, `/api/lures`, action.payload);
        yield put ({type: 'GET_LURES'});
    }
    catch (error) {
        console.log('Error in adding item', error);
    };
};

function* addLureSaga(){
    yield takeEvery('ADD_LURE', addLure);
};

export default addLureSaga;