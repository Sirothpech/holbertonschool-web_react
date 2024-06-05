import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StyleSheetTestUtils } from 'aphrodite';
import { initialState } from '../reducers/uiReducer';
import App from './App';

const mockStore = configureStore([]);

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      uiReducer: initialState
    });

    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('contains the Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false (default)', () => {
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('default state for isLoggedIn is false', () => {
    expect(wrapper.find('App').prop('isLoggedIn')).toEqual(false);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });
});
