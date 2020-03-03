import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/rooms/">
          <Rooms></Rooms>
        </Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
