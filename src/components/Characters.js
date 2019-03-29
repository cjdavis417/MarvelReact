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
            <div className='wrapper'>    
                <Avengers className='container' />
                <Villians className='container' /> 
                <StarWars className='card-container' />
                <StarWarsChars className='card-container' />
            </div>
        );
    }
}

export default Characters;





