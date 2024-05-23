import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

const logout = () => ({
  type: LOGOUT
});

const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

const boundLogin = (dispatch) => bindActionCreators(login, dispatch);
const boundLogout = (dispatch) => bindActionCreators(logout, dispatch);
const boundDisplayNotificationDrawer = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch);
const boundHideNotificationDrawer = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch);

export { boundDisplayNotificationDrawer, boundHideNotificationDrawer, boundLogin, boundLogout};
