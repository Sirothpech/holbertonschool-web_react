import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Footer from '../Footer/Footer';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false(default)', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    expect(wrapper.exists());
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });

  it('default state for isLoggedIn is false', () => {
    expect(wrapper.state('user').isLoggedIn).toEqual(false);
  });

  it('logIn function updates the state correctly', () => {
    const email = 'user@example.com';
    const password = 'password';
    wrapper.instance().logIn(email, password);
    expect(wrapper.state('user')).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('logOut function updates the state correctly', () => {
    wrapper.instance().logIn('user@example.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });

  it('displayDrawer state is false by default', () => {
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('displayDrawer toggle handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('displayDrawer toggle handleDisplayDrawer and handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('markNotificationAsRead removes the notification from the list', () => {
    const testNotifications = [
      { id: 1, value: "New course available" },
      { id: 2, value: "New resume available" },
      { id: 3, value: "Urgent requirement" }
    ];
  
    wrapper.setState({ listNotifications: testNotifications });
  
    wrapper.instance().markNotificationAsRead(2);
  
    const expectedNotifications = [
      { id: 1, value: "New course available" },
      { id: 3, value: "Urgent requirement" }
    ];
  
    expect(wrapper.state('listNotifications')).toEqual(expectedNotifications);
  });
});