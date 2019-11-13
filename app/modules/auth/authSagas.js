import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN, LOGOUT } from './authConstants';
import { loginFailed, loginSuccess, setAuth, clearAuth } from './authActions';
import { loginApi } from './authApis';
import { RESPONSE_STATUS } from '../../utils/constants';

function* sagaLogin(params) {
  try {
    const response = yield call(loginApi, params.payload);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(setAuth(response.data));
        yield put(loginSuccess());
        break;
      default:
        yield put(loginFailed());
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* sagaLogout() {
  try {
    yield put(clearAuth());
  } catch (error) {
    console.log(error.message);
  }
}

export default [takeLatest(LOGIN, sagaLogin), takeLatest(LOGOUT, sagaLogout)];
