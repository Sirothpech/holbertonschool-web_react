import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing with default context value', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when user is defined and isLoggedIn is true', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'user@test.com' }} />);
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });

  it('clicking on the logout link calls the logOut function from context', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'user@test.com' }} logOut={logOutMock} />);
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
