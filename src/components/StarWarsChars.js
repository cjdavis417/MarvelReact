import React, {Component} from 'react'

// Material UI Calls
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class StarWarsCars extends Component {
    constructor (id) {
        super()
        this.id = id
        this.films = [] // keeps state of films
        this.state = {
            detailes: []
        }

    }

    async getAPI() {
        let films = [];
        // API ID's for the films are 1 through 7.  loops over to get infor for each movie.
        for(var i = 1; i<8; i++) {
            await fetch('https://swapi.co/api/people/' + i + '/')
            .then(response => response.json())
            .then(data => films.push({data}))

            Promise.all(films).then(moreData => {
                this.setState({
                    films: moreData
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
        if (!this.state.films) {
            return (<div>loading</div>)
        }
        
        const finalArr = this.state.films.map(element => 
                element
            )
        const filmElement = finalArr.map(element => 
            // Material-UI elements    
            <Card >
                <CardContent>
                    <Typography variant='h4'>Name: {element.data.name}</Typography>
                    <Typography variant='h5'>Gender: {element.data.gender}</Typography>
                    <Typography variant='p'>Height: {this.getHeight(element.data.height)} feet</Typography>
                </CardContent>
            </Card>
        )
            
        return (
            // Read a doc that React.Fragment or Fragment is 'best practices'
            <React.Fragment>
                <Typography variant='h3'>Characters</Typography>
                {filmElement}
            </React.Fragment>
        )
        
    }


}

export default StarWarsCars;

