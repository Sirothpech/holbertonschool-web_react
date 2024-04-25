import React from 'react';
import './Notifications.css';
import closeIcon from './close.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <button style={ {position: "absolute", right: "20px"}} aria-label='Close'>
        <img src={closeIcon} alt="close-icon"></img>
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