import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

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

function App(isLoggedIn) {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      <Notifications listNotifications={listNotifications} />
      {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
    </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
