import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import '../stylesheets/bootstrap.css';
import '../stylesheets/bootstrap-grid.css';
import '../stylesheets/bootstrap-reboot.css';

import '../App.css';

import Nav from './Nav';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
            <Route exact path="/" component={Home} />
        </div>
      </HashRouter>

     
    );
  }
}

export default App;
