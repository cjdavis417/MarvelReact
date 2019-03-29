import React, {Component} from 'react';
import MarvelChar from './MarvelChar';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import CircularProgress from '@material-ui/core/CircularProgress';

const Ultron = new MarvelChar('Ultron', 'Ultron');
// const Loki = new MarvelChar('Loki', 'Loki');
// const Thanos = new MarvelChar('Thanos', 'Thanos');
// const Redskull = new MarvelChar('Red Skull', 'Red Skull');
// const Kree = new MarvelChar('Kree', 'Kree');
// const Galactus = new MarvelChar('Galactus', 'Galactus');

const GroupVillians = [Ultron]//[Ultron, Loki, Thanos, Redskull, Kree, Galactus];

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
        //this.GetCharacter();
        
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
                <div className='container'>
                    <GridList cellHeight={180} className='gridList'>
                        <GridListTile key='Subheader' cols={2}  style={{height: 'auto'}}>
                            <ListSubheader component='div'>Villians</ListSubheader>
                        </GridListTile>
                        {villReturn}
                    </GridList>
                </div>
            )
        }
    }
}

export default Villians;
