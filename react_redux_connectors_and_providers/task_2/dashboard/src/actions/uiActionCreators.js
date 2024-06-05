import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes';
// import { bindActionCreators } from 'redux';

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

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));
  try {
    const response = await fetch('../../dist/login-success.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (response.status === 200) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  } catch {
    dispatch(loginFailure());
  }
};

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure };
// const boundLogin = (dispatch) => bindActionCreators(login, dispatch);
// const boundLogout = (dispatch) => bindActionCreators(logout, dispatch);
// const boundDisplayNotificationDrawer = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch);
// const boundHideNotificationDrawer = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch);

// export { boundDisplayNotificationDrawer, boundHideNotificationDrawer, boundLogin, boundLogout};
