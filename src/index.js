import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';

// Views
import App from './views/App';
import Login from './views/Login';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" name="Home" component={App} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
