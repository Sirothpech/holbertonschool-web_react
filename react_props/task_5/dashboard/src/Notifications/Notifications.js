import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'; // Import the new NotificationItem component
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

export default function Notifications({displayDrawer}) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }

  return (
    <div className='notification-container'>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
      <div className={`Notifications ${notificationStyle}`}>
         {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
        <ul>
          {listNotifications.length === 0 ? (
            <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map(notification => (
                <NotificationItem 
                  key={notification.id}
                  html={notification.html}
                  type={notification.type}
                  value={notification.value}
                />
              ))
          )}
        </ul>
        <button aria-label="Close" onClick={handleButtonClick}>
          x
        </button>
      </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}
