import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import '../stylesheets/bootstrap.css';
import '../stylesheets/bootstrap-grid.css';
import '../stylesheets/bootstrap-reboot.css';

import '../App.css';
import '../index.css';

import Nav from './Nav';
import Splash from './Splash';
import Avengers from './Avengers';
import Villians from './Villians';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
            <Route exact path="/" component={Splash} />
            <Route path="/avengers" component={Avengers} />
            <Route path="/villians" component={Villians} />
        </div>
      </HashRouter>

     
    );
  }
}

export default App;
