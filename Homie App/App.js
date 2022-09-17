import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import { Route, Switch, HashRouter } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Kirayadaar from './Kirayadaar';
import Chat from './Chat';
// import {Route ,Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/kirayadaar' component={Kirayadaar} />
          <Route exact path='/chat' component={Chat}/>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
