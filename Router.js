import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" >
        <Scene key="login" component={Login} />
        <Scene key="home" component={Home} initial />
        <Scene key="forgotpassowrd" component={ForgotPassword} />
      </Stack>
    </Router>
)};


export default RouterComponent;
