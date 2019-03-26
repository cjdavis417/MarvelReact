import React, {Component} from 'react';
import $ from 'jquery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class MarvelChar extends Component {
    constructor(id, name) {
        super()
        this.id = id;
        this.name = name;

        this.state = [];
    }

    async GetCharacter(name) {
        var finalString = [];
        var FinalAvengers = [];

        var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
        var APIkey = '509dae0442a04443238ccd706605db14';
        var hash = '5bcfc1939107267c15cc5d863348fffd';

        let json = await $.getJSON(marvelAPI, {
            name: name,
            limit: 100,
            ts: '1',
            apikey: APIkey,
            hash: hash
        });
        
        Promise.all([json]).then(results => {
            var charArray = []
            charArray.push({
                id: results[0].data.results[0].id,
                name: results[0].data.results[0].name,
                desc: results[0].data.results[0].description,
                path: results[0].data.results[0].thumbnail.path,
                extension: results[0].data.results[0].thumbnail.extension
                })
                var imagePath = charArray[0].path + '.' + charArray[0].extension 
                finalString = charArray.map((member) => //FinalAvengers.map((member) =>
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
                )
                console.log('finalString: ',finalString)
            return (
                finalString
            )
                
        });
    }
}

export default MarvelChar;

const cardStyle = {
    width: '18rem'
}