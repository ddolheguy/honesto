import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../services/authenticationService';

const ProtectedRoute: React.FC<any> = props => {
  const { ...rest } = props;

  const test = isAuthenticated();
  if (!test) {
    return <Redirect to='/login' />;
  }

  return <Route {...rest} />;
};

export default ProtectedRoute;
