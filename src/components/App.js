import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import '../App.css';
import '../index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './Theme';
import ButtonAppBar from './ButtonAppBar';
import Splash from './Splash';
import Characters from './Characters';
import Avengers from './Avengers';
import Villians from './Villians';
import About from './About';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <HashRouter>
          <React.Fragment>
            <ButtonAppBar />
            <Route exact path="/" component={Characters} />
            <Route path="/avengers" component={Avengers} />
            <Route path="/villians" component={Villians} />
            <Route path="/about" component={About} />
          </React.Fragment>
        </HashRouter>
        
        <Footer />
      
    </MuiThemeProvider>
     
    );
  }
}

export default App;