import React, {Component} from 'react';
import $ from 'jquery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';

class MarvelChar extends Component {
    constructor(id, name, shColor) {
        super()
        this.id = id;
        this.name = name;

        this.state = [];
    }

    async GetCharacter() {
        var finalString = [];
        var FinalAvengers = [];

        var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
        var APIkey = '509dae0442a04443238ccd706605db14';
        var hash = '5bcfc1939107267c15cc5d863348fffd';

        let json = await $.getJSON(marvelAPI, {
            name: this.name,
            limit: 100,
            ts: '1',
            apikey: APIkey,
            hash: hash
        });
        let results = json.data.results[0];
        
            var charArray = []
            
            charArray.push({
                id: results.id,
                name: results.name,
                desc: results.description,
                path: results.thumbnail.path,
                extension: results.thumbnail.extension
            })
        
        
        var imagePath = charArray[0].path + '.' + charArray[0].extension 

        finalString = charArray.map((member) => //FinalAvengers.map((member) =>
            <Grid item xs={12}>
            
            <Card style={cardStyle} key={member.id}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        image={imagePath}
                        title={member.name}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{member.name}</Typography>
                    <Typography component="p">{member.desc}</Typography>
                </CardContent>
            </Card>
            
            </Grid>
        )
        
        return (
            <div>{finalString}</div>
        )
                
        
    }
}

export default MarvelChar;

const cardStyle = {
    width: '18rem'
}