import React, {Component} from 'react';
import MarvelChar from './MarvelChar';



const IronMan = new MarvelChar('IronMan', 'Iron Man');
const CaptAmerica = new MarvelChar('CaptAmerica', 'Captain America');
const Thor = new MarvelChar('Thor', 'Thor');
const Hulk = new MarvelChar('Hulk', 'Hulk');
const SpiderMan = new MarvelChar('SpiderMan', 'Spider-Man');
const IronPatriot = new MarvelChar('IronPatriot', 'Iron Patriot (James Rhodes)');
const Vision = new MarvelChar('Vision', 'Vision');
const HankPym = new MarvelChar('HankPym', 'Hank Pym');
const Daredevil = new MarvelChar('Dardevil', 'Daredevil');
const Deadpool = new MarvelChar('Deadpool', 'Deadpool');
const BlackPanther = new MarvelChar('BlackPanther', 'Black Panther');
const BlackWidow = new MarvelChar('BlackWidow', 'Black Widow');

const GroupAvengers = [IronMan, CaptAmerica, Thor, Hulk, SpiderMan, IronPatriot, Vision, HankPym, Daredevil, Deadpool, BlackPanther, BlackWidow];

class Avengers extends Component {
    constructor() {
        super()
        this.state = {
            avengers: []
        }
    }

    async GetCharacter() {
        let avengers2 = GroupAvengers.map((element) => 
            element.GetCharacter()
        ) 
        
        Promise.all(avengers2).then(moreData => {
            this.setState({
            avengers: moreData
            })
        });
    }

    componentDidMount() {
        this.GetCharacter();
    }

    render() {
        const avengReturn = this.state.avengers.map(element =>
            element
            )
        return (
            <div>{avengReturn}</div>
        )

    }
}

export default Avengers;




