import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import '../App.css';
import '../index.css';

import ButtonAppBar from './ButtonAppBar';
import Splash from './Splash';
import Avengers from './Avengers';
import Villians from './Villians';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ButtonAppBar />
          <Route exact path="/" component={Splash} />
          <Route path="/avengers" component={Avengers} />
          <Route path="/villians" component={Villians} />
        </div>
      </HashRouter>

     
    );
  }
}

export default App;
