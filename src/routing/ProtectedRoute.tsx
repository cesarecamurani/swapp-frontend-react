import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/auth.service'
import { HOME_PATH } from '../utils/paths';

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <Route {...rest} render={(props: any) =>
      currentUser ? <Component {...props} /> : <Redirect to={HOME_PATH} />
    } />
  );
};
