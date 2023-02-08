import { ActionTypes } from '../constants/actionTypes';


export const login = (user) => ({
  payload: user,
  type: ActionTypes.LOGIN,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT
});
