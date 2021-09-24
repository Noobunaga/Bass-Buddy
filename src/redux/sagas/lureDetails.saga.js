import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchLureDetails(action) {
    try{
        console.log('fetch lure details', action);
        const lureDetails = yield axios.get(`/api/lures/details/${action.payload}`);
        yield put({type: 'SET_LURE_DETAILS', payload: lureDetails.data});
    }
    catch(error) {
        console.log('FETCHING lure details', error);
    }
};

function* fetchLureDetail(){
    yield takeEvery('FETCH_LURE_DETAILS', fetchLureDetails);
};

export default fetchLureDetail;