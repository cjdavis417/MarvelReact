// Character page.  This is the home page.

import React, {Component} from 'react';

import Villians from './Marvel/Villians';
import Avengers from './Marvel/Avengers';
import StarWars from './StarWars/StarWars';
import StarWarsChars from './StarWars/StarWarsChars';
import SectionBar from './SectionBar';

class Characters extends Component {

    render() {
        return (
            <div className='wrapper'>    
                <SectionBar section='Marvel Heroes' />
                <Avengers className='container' />
                
                <SectionBar section='Marvel Villians' />
                <Villians className='container' /> 
                
                <SectionBar section='Star Wars Films' />
                <StarWars className='card-container' />
                
                <SectionBar section='Star Wars Characters' />
                <StarWarsChars className='card-container' />
            </div>
        );
    }
}

export default Characters;





