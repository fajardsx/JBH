import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SET_AUTH,
  CLEAR_AUTH,
  SET_DEVICE_ID,
  SET_SEE_LANDING,
} from './authConstants';

const loginInitialState = {
  loginFetch: false,
  loginParam: null,
  loginResponse: null,
  loginError: null,
};

const authInitialState = {
  ...loginInitialState,
  action: '',
};

export const authReducers = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginFetch: true,
        loginParam: action.payload,
        action: action.type,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
        loginFetch: false,
        action: action.type,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginError: action.payload,
        loginFetch: false,
        action: action.type,
      };
    default:
      return state;
  }
};

const sessionInitialState = {
  userData: {
    id: '',
    name: '',
    token: '',
    refreshToken: '',
  },
  isSeeLanding: 0,
  deviceId: null,
  action: '',
};

export const sessionReducers = (state = sessionInitialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        userData: action.payload.userData,
        action: action.type,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        ...sessionInitialState,
        action: action.type,
      };
    case SET_DEVICE_ID:
      return {
        ...state,
        deviceId: action.payload,
        action: action.type,
      };
    case SET_SEE_LANDING:
      return {
        ...state,
        isSeeLanding: 1,
        action: action.type,
      };
    default:
      return state;
  }
};
