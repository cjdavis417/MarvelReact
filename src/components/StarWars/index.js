// Parent to the child

import React, {Component} from 'react';

import StarWars from './StarWars';
import StarWarsChars from './StarWarsChars';
import SectionBar from '../SectionBar';

class Index extends Component {

    render() {
        return (
            <div className='wrapper'>    
                <SectionBar section='Films' />
                <StarWars className='card-container' />

                <SectionBar section='Characters' />
                <StarWarsChars className='card-container' />
            </div>
        );
    }
}

export default Index;