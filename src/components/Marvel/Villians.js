import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

import {Typography} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

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
            loading: false,
            villians: [],
            comics: []
        }
    }

    async GetCharacter() {

        let villians2 = GroupVillians.map((element) =>
            element.GetCharacter()
        )

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
    
        const villReturn = this.state.villians.map(element => 
            element
        )
        
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
