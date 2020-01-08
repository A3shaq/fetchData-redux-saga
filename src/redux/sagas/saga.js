import { takeEvery, put, call } from 'redux-saga/effects';
import {
    IMAGES_LOAD,
    // imagesLoad
    IMAGES_LOAD_SUCCESS,
    IMAGES_LOAD_FAIL,
    imagesLoadSuccess,
} from '../actions';

function* handleImagesLoad(action) {
    console.log(action);
    console.log('handleImagesLoad Saga');
    try {
        const res = yield call(
            fetch,
            `https://api.unsplash.com/photos/?client_id=${
                action.payload
            }&per_page=20&page=${action.page}`,
            //action.payload.userId,
        );
        const images = yield res.json();
        console.log(res);
        yield put(imagesLoadSuccess(images));
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
        console.log('catch is runnung', e);
    }
}

function* handleImagesDelete(action) {
    //DELETE API HAS RUN
    // yield put(imagesLoad())
}

function* saga() {
    yield takeEvery(IMAGES_LOAD, handleImagesLoad);
    //yield takeEvery(IMAGES_DELETE, handleImagesDelete)
}

export default saga;
