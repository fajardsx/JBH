import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_AUTH,
  CLEAR_AUTH,
  SET_DEVICE_ID,
  SET_SEE_LANDING,
} from './authConstants';

export const login = payload => ({ type: LOGIN, payload });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailed = () => ({ type: LOGIN_FAILED });

export const setAuth = payload => ({ type: SET_AUTH, payload });
export const clearAuth = payload => ({ type: CLEAR_AUTH, payload });
export const setDeviceId = payload => ({ type: SET_DEVICE_ID, payload });
export const setSeeLanding = () => ({ type: SET_SEE_LANDING });
