import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import $ from 'jquery';
import MarvelChar from './MarvelChar';

var Avenger1 = new MarvelChar('Avenger1', 'Avengers');
var IronMan = new MarvelChar('IronMan', 'Iron Man');
var CaptAmerica = new MarvelChar('CaptAmerica', 'Captain America');
var Thor = new MarvelChar('Thor', 'Thor');
var Hulk = new MarvelChar('Hulk', 'Hulk');
var IronPatriot = new MarvelChar('IronPatriot', 'Iron Patriot (James Rhodes)');
var Vision = new MarvelChar('Vision', 'Vision');
var HankPym = new MarvelChar('HankPym', 'Hank Pym');
var Daredevil = new MarvelChar('Dardevil', 'Daredevil');
var Deadpool = new MarvelChar('Deadpool', 'Deadpool');
var BlackPanther = new MarvelChar('BlackPanther', 'Black Panther');
var BlackWidow = new MarvelChar('BlackWidow', 'Black Widow');
var SpiderMan = new MarvelChar('SpiderMan', 'Spider-Man');

const GroupAvengers = [Avenger1, IronMan, CaptAmerica, Thor, Hulk, SpiderMan, IronPatriot, Vision, HankPym, Daredevil, Deadpool, BlackPanther, BlackWidow];

class Avengers extends Component {
    constructor() {
        super()
        this.state = {
            hulk: ''
        }
    }

    async GetCharacter() {
        let hulk2 = await Hulk.GetCharacter(Hulk.name);
        console.log('hulk2', hulk2)
        this.setState({hulk: hulk2}, () => console.log('state:',this.state))
    }

    componentDidMount() {
        this.GetCharacter()
    }

    render() {
    return (
        <div>
            
            <div className="container">{this.state.hulk}</div>
        </div>
    );
}
}

export default Avengers;

const cardStyle = {
    width: '18rem'
}



