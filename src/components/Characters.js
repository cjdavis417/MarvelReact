import React, {Component} from 'react';
import MarvelChar from './MarvelChar';
import Villians from './Villians';
import Avengers from './Avengers';

class Characters extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Heroes</h1>
                    <Avengers />
                </div>
                <div>
                    <h1>Villians</h1>
                    <Villians />
                </div>
            </div>
        );
    }
}

export default Characters;




