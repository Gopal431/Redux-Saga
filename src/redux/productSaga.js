import { type } from '@testing-library/user-event/dist/type';
import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'
function* getProduct() {
    let data = yield fetch('http://localhost:3005/product')
    data = yield data.json();
    console.log("action is called", data)
    yield put({ type: SET_PRODUCT_LIST, data })
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct)
}
export default productSaga