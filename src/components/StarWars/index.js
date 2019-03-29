import React, {Component} from 'react';

//import MarvelChar from './MarvelChar';
import StarWars from './StarWars';
import StarWarsChars from './StarWarsChars';
//import classes from '*.module.css';

class Index extends Component {

    render() {
        return (
            <div className='wrapper'>    
                <StarWars className='card-container' />
                <StarWarsChars className='card-container' />
            </div>
        );
    }
}

export default Index;