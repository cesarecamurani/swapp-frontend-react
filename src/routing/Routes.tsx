import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HOME_PATH,
  LOGIN_PATH,
  PROFILE_PATH,
  REGISTER_PATH,
  TERMS_AND_CONDITIONS_PATH
} from '../utils/paths'
import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile'
import LoginForm from '../components/forms/LoginForm/LoginForm';
import RegisterForm from '../components/forms/RegisterForm/RegisterForm';
import TermsAndConditions from '../components/forms/TermsAndConditions/TermsAndConditions';

export default function Routes() {
  return (
    <Switch>
      <Route path={HOME_PATH} component={Homepage} />
      <Route path={LOGIN_PATH} component={LoginForm} />
      <Route path={PROFILE_PATH} component={Profile} />
      <Route path={REGISTER_PATH} component={RegisterForm}/>
      <Route path={TERMS_AND_CONDITIONS_PATH} component={TermsAndConditions}/>
    </Switch>
  )
}
