import React from 'react';
import './Notifications.css';
// import closeIcon from './close.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }
  return (
    <div className='Notifications'>
      <button style={ {position: "absolute", right: "20px"}} aria-label='Close' onClick={handleButtonClick}>
        {/* <img src={closeIcon} alt="close-icon"></img> */}
        x
      </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
    </div>
  );
}