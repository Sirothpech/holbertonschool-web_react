import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';  // Import connect from react-redux
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '3px solid #df354b'
  },
  body: {
    minHeight: '30vh',
    margin: '2rem',
    textAlign: 'left',
  },
  footer: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: '3px solid #df354b'
  }
});

const listCourses = [
  {
    id: 1,
    name: 'ES6', 
    credit: 60
  },
  {
    id: 2,
    name: 'Webpack', 
    credit: 20
  },
  {
    id: 3,
    name: 'React', 
    credit: 40
  },
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available'
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available'
  },
  {
    id: 3,
    type: 'urgent',
    html: {__html: getLatestNotification()}
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: this.props.isLoggedIn, // Use isLoggedIn from props
      },
      listNotifications: listNotifications,
    };
  }

  handleDisplayDrawer = () => {
    this.props.dispatch({
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    });
  }

  handleHideDrawer = () => {
    this.props.dispatch({
      type: 'HIDE_NOTIFICATION_DRAWER',
    });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut = (e) => {
    if (e) e.preventDefault();
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    const { user } = this.state;
    const { displayDrawer } = this.props; // Use displayDrawer from props
    const value = {
      user: this.state.user,
      displayDrawer: displayDrawer, // Use displayDrawer from props
      logIn: this.logIn,
      logOut: this.logOut,
      handleDisplayDrawer: this.handleDisplayDrawer,
      handleHideDrawer: this.handleHideDrawer,
      listNotifications: this.state.listNotifications,
      markNotificationAsRead: this.markNotificationAsRead,
    };
    return (
      <AppContext.Provider value={value}>
      <>
        <div className={css(styles.header)}>
          <Header />
          <WithLogging>
          <Notifications />
        </WithLogging>
        </div>
        <div className={css(styles.body)}>
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn}/>
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>latest News1</p>
            <p>latest News2</p>
            <p>latest News3</p>
          </BodySection>
        </div>
        <Footer className={css(styles.footer)} />
      </>
      </AppContext.Provider>
    );
  }
}

// Create mapStateToProps function
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),  // Access isUserLoggedIn from the immutable state
    displayDrawer: state.get('isNotificationDrawerVisible') // Access isNotificationDrawerVisible from the immutable state
  };
};

// Connect mapStateToProps to the component
export default connect(mapStateToProps)(App);
