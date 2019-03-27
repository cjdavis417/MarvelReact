import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import '../App.css';
import '../index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import ButtonAppBar from './ButtonAppBar';
import Splash from './Splash';
import Characters from './Characters';
import Avengers from './Avengers';
import Villians from './Villians';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      
        <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    

     
    );
  }
}

export default App;


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red
  }
})