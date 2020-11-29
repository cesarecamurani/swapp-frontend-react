import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  PROFILE_PATH,
  SWAPPER_PATH,
  TERMS_AND_CONDITIONS_PATH
} from '../utils/paths'
import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile'
import Swapper from '../components/forms/SwapperForm/SwapperForm';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import RegisterForm from '../components/forms/RegisterForm/RegisterForm';
import TermsAndConditions from '../components/forms/TermsAndConditions/TermsAndConditions';
import { ProtectedRoute } from './ProtectedRoute';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'><Redirect to={HOME_PATH} /></Route>
      <Route path={HOME_PATH} component={Homepage} />
      <Route path={LOGIN_PATH} component={LoginForm} />
      <Route path={REGISTER_PATH} component={RegisterForm}/>
      <ProtectedRoute path={PROFILE_PATH} component={Profile} />
      <ProtectedRoute path={SWAPPER_PATH} component={Swapper} />
      <Route path={TERMS_AND_CONDITIONS_PATH} component={TermsAndConditions}/>
    </Switch>
  )
}
