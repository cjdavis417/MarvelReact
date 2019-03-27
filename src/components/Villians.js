import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

const Ultron = new MarvelChar('Ultron', 'Ultron');
const Loki = new MarvelChar('Loki', 'Loki');
const Thanos = new MarvelChar('Thanos', 'Thanos');
const Redskull = new MarvelChar('Red Skull', 'Red Skull');
const Kree = new MarvelChar('Kree', 'Kree');
const Galactus = new MarvelChar('Galactus', 'Galactus');

const GroupVillians = [Ultron, Loki, Thanos, Redskull, Kree, Galactus];

class Villians extends Component {
    constructor() {
        super()
        this.state = {
            villians: []
        }
    }

    async GetCharacter() {

        let villians2 = GroupVillians.map((element) =>
            element.GetCharacter()
        )

        Promise.all(villians2).then(moreData => {
            this.setState({
                villians: moreData
            })
        })
    }

    componentDidMount() {
        this.GetCharacter();
    }

    render() {
    
        const villReturn = this.state.villians.map(element => 
            element
        )
        
        return (
            <div>{villReturn}</div>
        )
        
    }
}

export default Villians;
