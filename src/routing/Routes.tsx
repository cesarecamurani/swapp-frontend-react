import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH
} from '../paths'
import Homepage from '../components/Homepage/Homepage';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Routes() {
  return (
    <Switch>
      <Route path={HOME_PATH} component={Homepage} />
      <Route path={LOGIN_PATH} component={LoginForm} />
      <Route path={REGISTER_PATH} component={RegisterForm}/>
    </Switch>
  )
}
