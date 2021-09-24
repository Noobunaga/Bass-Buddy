import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

function* editLure(action) {
    try {
        yield call(axios.put(`/api/lures/${action.payload.id}`, action.payload));
        yield put({type: 'FETCH_LURE_DETAILS', payload: action.payload.id});
    }
    catch(error) {
        console.log('EDIT lure error', error);
    }
};

function* editLureSaga(){
    yield takeEvery('EDIT_LURE', editLure);
};

export default editLureSaga;