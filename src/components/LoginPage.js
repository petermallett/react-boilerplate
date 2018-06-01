import React from 'react';
import { connect } from 'react-redux';
import { startLoginAction } from '../actions/auth';

export const UCLoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tagline for app, I guess.</p>
      <button onClick={startLogin} className="button">Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLoginAction())
});

export default connect(undefined, mapDispatchToProps)(UCLoginPage);
