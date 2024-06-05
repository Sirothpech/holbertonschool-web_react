import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer'; // Assuming Footer is exported as a named export

describe('Footer', () => {
  it('the link is not displayed when the user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.containsMatchingElement(<a>Contact us</a>)).toBe(false);
  });

  it('the link is displayed when the user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.containsMatchingElement(<a>Contact us</a>)).toBe(true);
  });
});
