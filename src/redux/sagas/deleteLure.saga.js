import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';


function* deleteLure(action) {
    const id = action.payload;
    try {
        yield call(axios.delete, `/api/lures/${id}`);
        yield put({type: 'GET_LURES'})
    }
    catch (error) {
        console.log('Error deleting', error);
    }
};

function* deleteLureSaga(){
    yield takeEvery('DELETE_LURE', deleteLure);
};

export default deleteLureSaga;