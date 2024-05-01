import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  describe('With an empty listNotifications array or no listNotifications property', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('does not render any NotificationItem', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });

    it('renders "No new notification for now"', () => {
      expect(wrapper.text()).toContain('No new notification for now');
    });

    it('does not render "Here is the list of notifications"', () => {
      expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });
  });

  describe('With a non-empty listNotifications array', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New notification' },
    ];
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={notifications} />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct number of NotificationItem components', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
    });

    it('renders each NotificationItem with the correct props', () => {
      notifications.forEach((notification, index) => {
        const notificationItem = wrapper.find(NotificationItem).at(index);
        expect(notificationItem.prop('type')).toBe(notification.type);
        expect(notificationItem.prop('value')).toBe(notification.value);
      });
    });

    it('does not render "No new notification for now"', () => {
      expect(wrapper.text()).not.toContain('No new notification for now');
    });

    it('renders "Here is the list of notifications"', () => {
      expect(wrapper.text()).toContain('Here is the list of notifications');
    });
  });
});
