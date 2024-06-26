import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const opacity = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(5px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};

export const styles = StyleSheet.create({
  notificationHidden: {
    display: 'none',
  },
  notificationVisible: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    padding: '0.8rem',
    border: '1px dashed #df354b',
    marginRight: '1rem',
    marginBottom: '0.8rem',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: 'white',
      width: '100%',
      height: '100vh',
      border: 'none',
      padding: 0, 
      fontSize: '20px',
    },
  },
  sectionTitle: {
    marginBottom: '0.3rem',
    '@media (max-width: 900px)': {
      position: 'absolute',
      top: '0',
      right: '1rem'
    },
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '1rem',
    marginBottom: '0.2rem',
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacity, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'transparent',
    border: 'none'
  },
  buttonImg: {
    width: '20px',
    height: '20px',
  },
  notificationList: {
    marginTop: '0.5rem',
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

class Notifications extends Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer ||
         nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    const showMenuItem = !displayDrawer || listNotifications.length === 0;
    const notificationStyle = displayDrawer ? styles.notificationVisible : styles.notificationHidden;
    
    return (
      <div className='notification-container'>
        {showMenuItem && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            <p className={css(styles.sectionTitle)}>Your notifications</p>
          </div>
        )}
        
        {displayDrawer && (
          <div className={css(notificationStyle)}>
            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.notificationList)}>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
                ) : (
                  listNotifications.map(notification => (
                    <NotificationItem 
                      key={notification.id}
                      id={notification.id}
                      html={notification.html}
                      type={notification.type}
                      value={notification.value}
                      markAsRead={this.markAsRead.bind(this, notification.id)}
                    />
                  ))
              )}
            </ul>
            <button aria-label="Close" onClick={handleHideDrawer} className={css(styles.button)}>
              <img src={closeIcon} alt="Close" className={css(styles.buttonImg)}/>
            </button>
            </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer:() => {},
  handleHideDrawer: () => {},
}

export default Notifications;
