import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

// Material-UI imports
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

// character objects
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
            loading: false, // used to help determine spinner
            avengers: []
        }
    }

    // gets data from object function and maps to new array.  then sets state with the data.
    async GetCharacter() {
        let avengers2 = GroupAvengers.map((element) => 
            element.GetCharacter()
        ) 
        // must be in promise since data fetching is async
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
        // mapped state to a new array to make things simpler in the return statement.
        const avengReturn = this.state.avengers.map(element =>
            element
            )
        
        // used to determine load state
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




