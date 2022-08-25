import { type } from '@testing-library/user-event/dist/type';
import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant'
function* getProduct() {
    let data = yield fetch('http://localhost:3005/product')
    data = yield data.json();
    console.log("action is called", data)
    yield put({ type: SET_PRODUCT_LIST, data })
}
function* searchProduct(data) {
    let result = yield fetch(`http://localhost:3005/product?q=${data.query}`)
    result = yield result.json();
    console.log("action is called", result)
    yield put({ type: SET_PRODUCT_LIST, data: result })
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct)
    yield takeEvery(SEARCH_PRODUCT, searchProduct)
}
export default productSaga