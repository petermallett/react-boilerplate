import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogoutAction } from '../actions/auth';

export const UCHeader = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Boilerplate</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogoutAction())
});

export default connect(undefined, mapDispatchToProps)(UCHeader);
