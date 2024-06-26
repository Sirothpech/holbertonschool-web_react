import { Map } from 'immutable';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: false };
    case LOGIN_SUCCESS:
      return { ...state, isUserLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...state, isUserLoggedIn: false };
    case LOGOUT:
      return { ...state, isUserLoggedIn: false };
    default:
      return state;
  }
}