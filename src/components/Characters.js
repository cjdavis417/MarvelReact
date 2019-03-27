import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';

//import MarvelChar from './MarvelChar';
import Villians from './Villians';
import Avengers from './Avengers';
//import classes from '*.module.css';

class Characters extends Component {

    render() {
        return (
            <div>
                
                    <h1>Heroes</h1>
                    
                    <Avengers />
                    
                    
              <hr />
                    <h1>Villians</h1>
                   
                    <Villians />
                    
           </div>
        );
    }
}

export default Characters;





