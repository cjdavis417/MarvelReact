import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

// CSS imports
import '../App.css';
import '../index.css';

// Material-UI imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import ButtonAppBar from './ButtonAppBar';
import Characters from './Characters';
import Marvel from './Marvel/index';
import StarWars from './StarWars/index';
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
            <Route path="/Marvel/" component={Marvel} />
            <Route path="/StarWars/" component={StarWars} />
            <Route path="/about" component={About} />
          </React.Fragment>
        </HashRouter>
        <Footer />
    </MuiThemeProvider>
     
    );
  }
}

export default App;