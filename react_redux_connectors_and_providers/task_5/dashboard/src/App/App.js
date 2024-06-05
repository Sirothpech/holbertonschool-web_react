import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';
import WithLogging from '../HOC/WithLogging';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, fetchNotifications } from '../actions/uiActionCreators'; 

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

class App extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.props.fetchNotifications();
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

  render() {
    const { user, isLoggedIn, login } = this.props;
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    const value = {
      user,
      displayDrawer,
      handleDisplayDrawer: displayNotificationDrawer,
      handleHideDrawer: hideNotificationDrawer,
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
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              {/* Render CourseList component */}
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login login={login}/>
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

export const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  fetchNotifications,
};

App.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
