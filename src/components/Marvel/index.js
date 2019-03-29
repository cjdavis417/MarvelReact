import React, {Component} from 'react';

import Villians from './Villians';
import Avengers from './Avengers';

class Index extends Component {

    render() {
        return (
            <div className='wrapper'>    
                <Avengers className='card-container' />
                <Villians className='card-container' /> 
            </div>
        );
    }
}

export default Index;