import React, {Component} from 'react';

import StarWars from './StarWars';
import StarWarsChars from './StarWarsChars';

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