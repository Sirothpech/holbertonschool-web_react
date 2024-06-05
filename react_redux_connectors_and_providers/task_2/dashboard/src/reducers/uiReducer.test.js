import { Map } from 'immutable';
import { initialState, uiReducer } from './uiReducer.js';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const selectCourseAction = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, selectCourseAction);
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const displayNotificationDrawerAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, displayNotificationDrawerAction);
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    });
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const stateDrawerVisible = initialState.set('isNotificationDrawerVisible', true);
    const hideNotificationDrawerAction = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = uiReducer(stateDrawerVisible, hideNotificationDrawerAction);
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false
    });
  });

  it('should set user when LOGIN action is passed', () => {
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const loginAction = { type: LOGIN, user };
    const newState = uiReducer(initialState, loginAction);
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      user
    });
  });

  it('should set user to null when LOGOUT action is passed', () => {
    const userState = initialState.set('user', { email: 'test@test.com', password: 'password', isLoggedIn: true });
    const logoutAction = { type: LOGOUT };
    const newState = uiReducer(userState, logoutAction);
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      user: null
    });
  });
});
