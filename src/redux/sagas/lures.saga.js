import axios from 'axios';
import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';

function* getAllLures() {
    try {
        const lures = yield axios.get(`/api/lures`);
        console.log('Get all:', lures.data);
        yield put({type: 'SET_LURES', payload: lures.data});
    }
    catch(error) {
        console.log('get all error', error);
    };
};

function* getUserLures() {
    try {
        const lures = yield axios.get(`/api/lures/userLures`);
        console.log('Get User lures', lures.data);
        yield put ({type: 'SET_USER', payload: lures.data});
    }
    catch (error) {
        console.log('Error in userLures:', error);
    };
};

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

//delete lure
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

//edit lure
function* editLure(action) {
    try {
        yield call(axios.put(`/api/lures/${action.payload.id}`, action.payload));
        yield put({type: 'FETCH_LURE_DETAILS', payload: action.payload.id});
    }
    catch(error) {
        console.log('EDIT lure error', error);
    }
}

function* fetchLureDetails(action) {
    try{
        const lureDetails = yield axios.get(`/api/lures/details/${action.payload.lureId}`);
        yield put({type: 'SET_LURE_DETAILS', payload: lureDetails.data[0]});
    }
    catch(error) {
        console.log('FETCHING lure details', error);
    }
}


function* getAllLuresSaga(){
    yield takeLatest('GET_LURES', getAllLures);
    yield takeLatest('GET_USER_LURES', getUserLures);
    yield takeEvery('ADD_LURE', addLure);
    yield takeEvery('DELETE_LURE', deleteLure);
    yield takeEvery('EDIT_LURE', editLure);
    yield takeEvery('FETCH_LURE_DETAILS', fetchLureDetails);
};

export default getAllLuresSaga;