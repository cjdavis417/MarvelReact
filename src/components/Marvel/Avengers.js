import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

//import classes from '*.module.css';



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

const GroupAvengers = [IronMan,CaptAmerica, Thor, Hulk, SpiderMan, IronPatriot, Vision, HankPym, Daredevil, Deadpool, BlackPanther, BlackWidow];

class Avengers extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            avengers: []
        }
    }

    async GetCharacter() {
        let avengers2 = GroupAvengers.map((element) => 
            element.GetCharacter()
        ) 
        
        Promise.all(avengers2).then(moreData => {
            this.setState({
                loading: false,
                avengers: moreData
            })
        });
    }

    componentDidMount() {
        this.setState({loading: true})
        this.GetCharacter();
        
    }

    render() {
        const avengReturn = this.state.avengers.map(element =>
            element
            )

        if(this.state.loading) {
            return (
                <CircularProgress className='progress' color='primary' />
            )
            } else {
                return (
                    <React.Fragment>
                        <Typography variant="h3">Avengers</Typography>
                        {avengReturn}
                    </React.Fragment>
                                
                        
                )
            }

    }
}

export default Avengers;




