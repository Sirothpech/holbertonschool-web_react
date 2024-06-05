import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { connect } from 'react-redux'; // Import connect
import PropTypes from 'prop-types'; // Import PropTypes
import { logout } from '../actions/uiActionCreators'; // Import logOut action creator

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#df354b',
  },
  holbertonLogo: {
    width: '200px',
    height: 'auto',
  },
  logoutSection: {
    marginTop: '15px',
    textAlign: 'right',
  },
  link: {
    color: '#df354b',
    textDecoration: 'none',
    marginLeft: '5px',
  }
});

function Header({ user, logOut }) { // Destructure user and logOut from props
  return (
    <>
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.holbertonLogo)} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <p id="logoutSection" className={css(styles.logoutSection)}>
          Welcome <strong>{user.email}</strong> (
          <a href="#" onClick={logout} className={css(styles.link)}>Log out</a>)
        </p>
      )}
    </>
  );
}

// Create mapStateToProps function
const mapStateToProps = (state) => {
  return {
    user: state.user // Map the user props to the user within the Redux state
  };
};

// Define propTypes
Header.propTypes = {
  user: PropTypes.object, // Define propTypes for user prop
  logOut: PropTypes.func // Define propTypes for logOut action creator
};

// Connect the Header component to mapStateToProps and the logOut action creator
export default connect(mapStateToProps, { logOut })(Header);
