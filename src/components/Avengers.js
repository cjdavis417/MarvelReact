import React, {Component} from 'react';
import MarvelChar from './MarvelChar';
import { element } from 'prop-types';

var Hulk = new MarvelChar('Hulk', 'Hulk');

class Avengers extends Component {
    constructor() {
        super()
        this.state = {
            hulk: ''
        }
    }

    async GetCharacter() {
        let hulk2 = await Hulk.GetCharacter(Hulk.name);
        console.log('hulk2: ', hulk2)
        this.setState({
            hulk: hulk2
            //() => console.log('heroes: ',this.state))
        })
    };

    componentDidMount() {
        this.GetCharacter();
        
    }

    render() {
        return (
            <div>
            <div>{this.state.hulk}</div>
            </div>
        );
    }
}

export default Avengers;




