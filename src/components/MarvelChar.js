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
        console.log(json)
            var results = json.data.results;

            var img ="";
            var name = "";
            var description = "";

            results.forEach(element => {
                img = element.thumbnail.path + '.' + element.thumbnail.extension;
                name = element.name;
            
                if (element.description.length > 0) {
                    description = element.description;
                } else {
                    description = "Character description in API is blank."
                }
            });

            FinalAvengers.push({
                img: img, 
                name: name,
                description: description
            });
            console.log(FinalAvengers);

            finalString = FinalAvengers.map((member) =>
        
            
                <Card style={cardStyle}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image={member.img}
                            title={member.name}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{member.name}</Typography>
                        <Typography component="p">{member.description}</Typography>
                    </CardContent>
                </Card>
        
        )
        console.log('finalstring', finalString);

        return (
            <div className="container">{finalString}</div>
        );
    }
}

export default MarvelChar;

const cardStyle = {
    width: '18rem'
}