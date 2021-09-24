import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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


function* getAllLuresSaga(){
    yield takeLatest('GET_LURES', getAllLures);
    yield takeLatest('GET_USER_LURES', getUserLures);
};

export default getAllLuresSaga;