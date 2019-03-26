import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import '../App.css';
import '../index.css';

import ButtonAppBar from './ButtonAppBar';
import Splash from './Splash';
import Characters from './Characters';
import Avengers from './Avengers';
import Villians from './Villians';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div>
      <HashRouter>
        <div>
          <ButtonAppBar />
          <Route exact path="/" component={Splash} />
          <Route path="/characters" component={Characters} />
          <Route path="/avengers" component={Avengers} />
          <Route path="/villians" component={Villians} />
        </div>
      </HashRouter>
      
      <Footer />
      </div>

     
    );
  }
}

export default App;
