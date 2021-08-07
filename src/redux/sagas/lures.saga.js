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
        yield put ({type: 'GET_LURE'});
    }
    catch (error) {
        console.log('Error in adding item', error);
    };
};

function* deleteItem(action) {
    const id = action.payload;
    try {
        yield call(axios.delete, `/api/lures/${id}`);
    }
    catch (error) {
        console.log('Error deleting', error);
    }
};

function* getAllLuresSaga(){
    yield takeLatest('GET_LURES', getAllLures);
    yield takeLatest('GET_USER_LURES', getUserLures);
    yield takeEvery('ADD_ITEM',addLure);
    yield takeEvery('DELETE_LURE', deleteItem);
};

export default getAllLuresSaga;