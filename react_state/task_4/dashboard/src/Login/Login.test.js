import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders a three input tag', () => {
    expect(wrapper.find('input').length).toBe(3);
  });
  
  it('renders a two label tag', () => {
    expect(wrapper.find('label').length).toBe(2);
  });

  it('submit button is disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(true);
  });

  it('submit button is enabled when the value of the two inputs are changed ', () => {
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'user@test.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(false);
  });
});