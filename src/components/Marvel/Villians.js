import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

// Material-UI imports
import {Typography} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

// Character Objects
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
            loading: false, // used to help determine spinner 
            villians: []
        }
    }

    // gets data from object function and maps to new array.  then sets state with the data.
    async GetCharacter() {
        let villians2 = GroupVillians.map((element) =>
            element.GetCharacter()
        )
        // must be in promise since data fetching is async
        Promise.all(villians2).then(moreData => {
            this.setState({
                loading: false,
                villians: moreData
            })
        })
    }

    componentDidMount() {
        this.setState({loading: true})
        this.GetCharacter();
    }

    render() {
        // mapped to new array to make things simpler in return statement
        const villReturn = this.state.villians.map(element => 
            element
        )
        
        // used to deteremine loading state
        if(this.state.loading) {
            return (
                <CircularProgress className='progress' color='secondary' />
            )
        } else {
            return (
                <React.Fragment>
                        <Typography variant="h3">Villians</Typography>
                        {villReturn}
                    </React.Fragment>
            )
        }
    }
}

export default Villians;
