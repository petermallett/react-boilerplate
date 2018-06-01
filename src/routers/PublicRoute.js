import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const UCPublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const render = (props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
  );

  return <Route {...rest} component={render} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(UCPublicRoute);
