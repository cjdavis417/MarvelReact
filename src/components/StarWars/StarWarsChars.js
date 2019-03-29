import React, {Component} from 'react'

// Material UI Calls
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


class StarWarsChars extends Component {
    constructor (id) {
        super()
        this.id = id
        this.people = [] // keeps state of films
        this.state = {
            detailes: []
        }

    }

    async getAPI() {
        let people = [];
        // API ID's for characters with id of 1 through 17.  loops over to get info for each character.
        for(var i = 1; i < 17; i++) {
            await fetch('https://swapi.co/api/people/' + i + '/')
            .then(response => response.json())
            .then(data => people.push({data}))

            // needs to be in promise since data fetching is asyncronus
            Promise.all(people).then(moreData => {
                this.setState({
                    people: moreData
                })
            })
        }
    }

    componentDidMount() {
        this.getAPI();
    }

    // API height is in cm.  This converts to feet with one decimal point.
    getHeight(cm) {
        let feet = cm / 30.48;
        return ( feet.toFixed(1) )
    }

    render() {
        // this waits for the api to finish getting data.
        if (!this.state.people) {
            return (<CircularProgress className='progress' color='primary' />)
        }
        
        const finalArr = this.state.people.map(element => 
                element
            )
        const filmElement = finalArr.map(element =>  
            <Card className='card' >
                <CardContent>
                    <Typography variant='h4'>{element.data.name}</Typography>
                    <Typography variant='h5'>Gender: {element.data.gender}</Typography>
                    <Typography variant='p'>Height: {this.getHeight(element.data.height)} feet</Typography>
                </CardContent>
            </Card>
        )
            
        return (
            // Read a doc that React.Fragment or Fragment is 'best practices'.  trying it out.
            <React.Fragment>
                {filmElement}
            </React.Fragment>
        )
        
    }

}

export default StarWarsChars;

