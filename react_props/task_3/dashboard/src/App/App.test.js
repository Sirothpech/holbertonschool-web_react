import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it ("renders without crashing", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBe(true);
	});

  it ("renders without crashing", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});
});
