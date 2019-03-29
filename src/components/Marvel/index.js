// parent to the children.

import React, {Component} from 'react';

import Villians from './Villians';
import Avengers from './Avengers';
import SectionBar from '../SectionBar';

class Index extends Component {

    render() {
        return (
            <div className='wrapper'>
                <SectionBar section='Avengers' />
                <Avengers className='card-container' />

                <SectionBar section='Villians' />
                <Villians className='card-container' /> 
            </div>
        );
    }
}

export default Index;