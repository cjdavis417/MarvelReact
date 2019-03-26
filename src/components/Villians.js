import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

const Ultron = new MarvelChar('Ultron', 'Ultron');
const Loki = new MarvelChar('Loki', 'Loki', 'blue');
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

    GetCharacter() {

        let villians2 = GroupVillians.map((element) => 
            element.GetCharacter(element.name)
        )

        Promise.all([villians2]).then(moreData => {
            this.setState({
                villians: moreData
            })
        })
        //console.log('villians2: ', villians2)
       
    }

    componentDidMount() {
        this.GetCharacter();
    }

    render() {
        console.log('state: ', this.state.villians)
        const villReturn = this.state.villians.map(element => 
            element
        )
        return (
            <div>{villReturn}</div>
        )
        
    }
}

export default Villians;

const cardStyle = {
    width: '18rem'
}