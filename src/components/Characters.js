import React, {Component} from 'react';

//import MarvelChar from './MarvelChar';
import Villians from './Villians';
import Avengers from './Avengers';
import StarWars from './StarWars';
import StarWarsChars from './StarWarsChars';
//import classes from '*.module.css';

class Characters extends Component {

    render() {
        return (
            <React.Fragment >    
                <Avengers className='container' />
                <Villians className='container' /> 
                <StarWars className='container' />
                <StarWarsChars className='container' />
           </React.Fragment>
        );
    }
}

export default Characters;





