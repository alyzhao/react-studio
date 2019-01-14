import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import routes from './routes'

const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={ props => (
    <route.component {...props} routes={route.routes}/>
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          { routes.map((route) => (<RouteWithSubRoutes key={route.path} {...route}/>) ) }
        </div>
      </Router>
    );
  }
}

export default App;
