// This is the class that gathers the data from the Marvel API

import React, {Component} from 'react';
import $ from 'jquery';

// Material-UI imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class MarvelChar extends Component {
    constructor(id, name) {
        super()
        this.id = id;
        this.name = name; // remnents of future stuff

    }

    async GetCharacter() {
        var finalString = [];

        // Marvel API stuff using jquery
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
        
        finalString = charArray.map((member) => 
            <div  className='card'>
                <Card key={imagePath}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                            image={imagePath}
                            title={member.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {member.name}
                                </Typography>
                                <Typography component="p">{member.desc}</Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
        
        return (
            finalString
        )
                
        
    }

}

export default MarvelChar;