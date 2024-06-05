import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import TestRenderer from 'react-test-renderer'; // ES6
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

const { act } = TestRenderer;

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
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
      entities: {
        notifications: {
          '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
          '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
          '3': { id: 3, type: 'default', value: 'New data available', isRead: false }
        }
      }
    });

    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false(default)', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <App logOut={logOut} />
        </Provider>
      );
    });
    expect(wrapper.exists());
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });

  it('default state for isLoggedIn is false', () => {
    expect(wrapper.find(App).props().isLoggedIn).toEqual(false);
  });

  it('logIn function updates the state correctly', () => {
    const email = 'user@example.com';
    const password = 'password';
    act(() => {
      wrapper.find(App).instance().logIn(email, password);
    });
    expect(wrapper.find(App).state('user')).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('logOut function updates the state correctly', () => {
    act(() => {
      wrapper.find(App).instance().logIn('user@example.com', 'password');
      wrapper.find(App).instance().logOut();
    });
    expect(wrapper.find(App).state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });

  it('markNotificationAsRead removes the notification from the list', () => {
    const testNotifications = [
      { id: 1, value: "New course available" },
      { id: 2, value: "New resume available" },
      { id: 3, value: "Urgent requirement" }
    ];

    act(() => {
      wrapper.find(App).setState({ listNotifications: testNotifications });

      wrapper.find(App).instance().markNotificationAsRead(2);
    });

    const expectedNotifications = [
      { id: 1, value: "New course available" },
      { id: 3, value: "Urgent requirement" }
    ];

    expect(wrapper.find(App).state('listNotifications')).toEqual(expectedNotifications);
  });
});

describe('mapStateToProps', () => {
  it('should return the correct object from state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
