import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import Notifications, { styles } from './Notifications';
import NotificationItem from './NotificationItem';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications', () => {
  describe('displayDrawer is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications />);
    });

    it('the menu item is being displayed when displayDrawer is false', () => {
      expect(wrapper.find(`.${css(styles.menuItem)}`).exists()).toBe(true);
    });

    it('div.notificationVisible is not being displayed', () => {
      expect(wrapper.find(`.${css(styles.notificationVisible)}`).exists()).toBe(false);
    });
  });

  describe('markAsRead', () => {
    it('calls console.log with the right message when markAsRead is called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const wrapper = shallow(<Notifications />);
      const instance = wrapper.instance();

      const mockId = 1;
      instance.markAsRead(mockId);
      expect(consoleSpy).toHaveBeenCalledWith(`Notification ${mockId} has been marked as read`);
      consoleSpy.mockRestore();
    });
  });

  describe('displayDrawer is true', () => {
    let wrapper;
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
    ];
  
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });
  
    it('the menu item is being displayed when displayDrawer is true', () => {
      expect(wrapper.find(`.${css(styles.menuItem)}`).exists()).toBe(true);
    });
    
    it('div.notificationVisible is being displayed', () => {
      expect(wrapper.find(`.${css(styles.notificationVisible)}`).exists()).toBe(true);
    });

    it('renders NotificationItem elements', () => {
      expect(wrapper.find(NotificationItem).at(0).prop('id')).toBe(1);
    });

    it('renders the correct html for the first NotificationItem', () => {
      const firstItem = wrapper.find(NotificationItem).first();
      expect(firstItem.props().value).toBe('New course available');
      expect(firstItem.props().type).toBe('default');
    });
  }); 
  
  describe('listNotifications not passed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} />);
    });

    it('does not render "Here is the list of notifications" when listNotifications is empty', () => {
      const emptyWrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
      expect(emptyWrapper.find('.Notifications p').exists()).toBe(false);
    });

    it('renders correctly when listNotifications is not passed', () => {
      expect(wrapper.find(NotificationItem).length).toBe(1);
      expect(wrapper.find(NotificationItem).at(0).props().value).toBe('No new notification for now');
    });
  });

  describe('Updating the props', () => {
    let wrapper;
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);
    });

    it('does not rerender when new list is the same length', () => {
      const newNotifications = [
        { id: 1, type: 'default', value: 'New course available' }
      ];

      wrapper.setProps({ listNotifications: newNotifications });
      
      const isUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newNotifications });
      expect(isUpdate).toBe(false);
    });

    it('does rerender when new list is longer', () => {
      const newNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' }
      ];

      wrapper.setProps({ listNotifications: newNotifications });

      const notificationItems = wrapper.find(NotificationItem);
      expect(notificationItems).toHaveLength(2);
    });
  });
});