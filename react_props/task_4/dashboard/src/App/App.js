import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

function App(isLoggedIn) {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
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
