import React, {Component} from 'react'

// Material UI calls
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Theme from './Theme';


class StarWars extends Component {
    constructor (id) {
        super()
        this.id = id
        this.films = []
        this.state = {
            detailes: []
        }

    }

    async getAPI() {
        let films = [];
        for(var i = 1; i<8; i++) {
            
        await fetch('https://swapi.co/api/films/' + i + '/')
        .then(response => response.json())
        .then(data => films.push({data}))

        Promise.all(films).then(moreData => {
            this.setState({
                films: moreData
            })
            console.log('starwars: ',this.state.films)
        })
    }
    }

    componentDidMount() {
        this.getAPI();
    }

    // this func converts a number into roman numerals
    romanize(num) {
        if (isNaN(num))
            return NaN;
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                   "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }


    render() {
        if (!this.state.films) {
            return (<CircularProgress className='progress' color='secondary' />)
        }
        
        
        const finalArr = this.state.films.map(element => 
                element
            )
        const filmElement = finalArr.map(element => 
                
            <Card className='card'>
                <CardContent>
                    <Typography variant='h4'>{element.data.title}</Typography>
                    <Typography variant='h5'>Episode {this.romanize(element.data.episode_id)}</Typography>
                    <Typography variant='p'>{element.data.opening_crawl}</Typography>
                </CardContent>
            </Card>
                
               
            )
            
        return (
            <React.Fragment>
                <Typography variant='h3'>Movies</Typography>
                {filmElement}
            </React.Fragment>
        )
        
    }


}

export default StarWars;


