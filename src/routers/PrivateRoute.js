import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const UCPrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const render = (props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  );

  return <Route {...rest} component={render} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(UCPrivateRoute);
