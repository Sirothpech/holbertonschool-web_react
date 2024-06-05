import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux'; // Import connect
import PropTypes from 'prop-types'; // Import PropTypes

const styles = StyleSheet.create({
  AppFooter: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: '3px solid #df354b'
  },
  contactUs: {
    marginTop: '15px',
    textAlign: 'center'
  }
});

function Footer({ user }) { // Destructure user from props
  return (
    <footer className={css(styles.AppFooter)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && (
        <p className={css(styles.contactUs)}>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

// Create mapStateToProps function
const mapStateToProps = (state) => {
  return {
    user: state.user // Map the user props to the user within the Redux state
  };
};

// Define propTypes
Footer.propTypes = {
  user: PropTypes.object // Define propTypes for user prop
};

// Connect the Footer component to the mapStateToProps function
export default connect(mapStateToProps)(Footer);
