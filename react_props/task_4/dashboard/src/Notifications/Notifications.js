import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'; // Import the new NotificationItem component
import { getLatestNotification } from '../utils/utils';
import PropType from 'prop-types';

export default function Notifications({displayDrawer}) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }
  return (
    <>
    <div className='menuItem'>
      <p>Your notifications</p>
    </div>
    {displayDrawer && (
      <div className='Notifications'>
      <button style={{ position: "absolute", right: "20px" }} aria-label='Close' onClick={handleButtonClick}>
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
    )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropType.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
}
