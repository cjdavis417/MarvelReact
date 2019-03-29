import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';


class Details extends Component {
    constructor (id) {
        super()
        this.id = id;
        this.state = {
            details: []
        }
    }
    
    async GetDetails() {

        const marvelAPI = 'https://gateway.marvel.com:443/v1/public/characters/';
        var charID = this.id;
        const suffix = '/stories?apikey=509dae0442a04443238ccd706605db14&ts=1&hash=5bcfc1939107267c15cc5d863348fffd';
        var details = [];
        await fetch(marvelAPI + charID + suffix)
        .then(response => response.json())
        .then(data => details.push({
            book: data.data.results
            }))
        
        Promise.all(details).then(moreData => {
            this.setState({
                details: moreData[0].book
            })
            console.log('state: ',this.state.details)
            
        })
        

    }

    componentDidMount() {
        this.GetDetails();
    }

    render() {
        const detReturn = this.state.details.map(element => 
            element
            )
        const elementRender = detReturn.map(element =>
            <div className='container'>
                <Typography
                component='h5' gutterbottom>
                    Title: {element.title}
                </Typography>
                </div>
            )
            console.log('detreturn length: ', detReturn.length)
        console.log('detreturn',detReturn)
        console.log('elementReturn',elementRender)
        
        return (
            <div className='container'>{elementRender}</div>
        )
    }
};

export default Details;