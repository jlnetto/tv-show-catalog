import { ActionTypes } from '../constants/actionTypes';
import type { AuthState } from '../../types/state';

const initialState: AuthState = {
  error: '',
  invalidUser: '',
  isAuthorized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:

      if (action.payload.password === 'supersecret') {
        return { ...state, invalidUser: '', isAuthorized: true, };
      }

      return { ...state, invalidUser: 'Username or password are invalid', isAuthorized: false };

    case ActionTypes.LOGOUT:
      return { ...state, isAuthorized: false, };
    default:
      return state;
  }
};

export default authReducer;
