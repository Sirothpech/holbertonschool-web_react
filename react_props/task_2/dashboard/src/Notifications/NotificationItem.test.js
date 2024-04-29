import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correctly with html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
