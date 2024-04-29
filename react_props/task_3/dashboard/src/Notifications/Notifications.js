import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'; // Import the new NotificationItem component
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }
  return (
    <div className='Notifications'>
      <button style={{ position: "absolute", right: "20px" }} aria-label='Close' onClick={handleButtonClick}>
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {/* Replace the <li> tags with NotificationItem components */}
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
