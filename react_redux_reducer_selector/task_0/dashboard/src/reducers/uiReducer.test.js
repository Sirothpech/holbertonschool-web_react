import { initialState, uiReducer } from './uiReducer.js';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const selectCourseAction = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, selectCourseAction);
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const displayNotificationDrawerAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, displayNotificationDrawerAction);
    expect(newState).toEqual({ ...initialState, isNotificationDrawerVisible: true });
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const stateDrawerVisible = { ...initialState, isNotificationDrawerVisible: true };
    const hideNotificationDrawerAction = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = uiReducer(stateDrawerVisible, hideNotificationDrawerAction);
    expect(newState).toEqual({ ...initialState, isNotificationDrawerVisible: false });
  });
});