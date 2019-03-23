import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import $ from 'jquery';
import MarvelChar from './MarvelChar';
import API from './API';
import { createEnumMember } from 'typescript';


var Ultron = new MarvelChar('Ultron', 'Ultron', 'blue');
var Loki = new MarvelChar('Loki', 'Loki', 'blue');
const Thanos = new MarvelChar('Thanos', 'Thanos', 'blue');
const Redskull = new MarvelChar('Red Skull', 'Red Skull', 'red');
const Kree = new MarvelChar('Kree', 'Kree', 'blue');
const Galactus = new MarvelChar('Galactus', 'Galactus', 'blue');

const GroupVillians = [Ultron, Loki, Thanos, Redskull, Kree, Galactus];

var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
var APIkey = '509dae0442a04443238ccd706605db14';
var hash = '5bcfc1939107267c15cc5d863348fffd';

var FinalVillians = [];
var VillianHTML = [];
//COMPONENT.STATE and COMPONENT.MOUNT
const Villians = () => {
    for (var z = 0; z < GroupVillians.length; z++) {
        $.getJSON(marvelAPI, {
            name: GroupVillians[z].name,
            limit: 100,
            ts: '1',
            apikey: APIkey,
            hash: hash
        })
        .done(function(response) {
            var results = response.data.results;
            var resultsLen = results.length;

            var img = "";
            var name = "";
            var description = "";

            results.forEach(element => {
                img = element.thumbnail.path + '.' + element.thumbnail.extension;
                name = element.name;

                if (element.description.length > 0) {
                    description = element.description;
                } else {
                    description = "Character description in API is blank"
                }
            })

            FinalVillians.push({
                img: img, 
                name: name,
                description: description
            });
            
        })
    };

    VillianHTML = FinalVillians.map((member) =>
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


    return (
        <div className='container'>{VillianHTML}</div>
    )
};

export default Villians;

const cardStyle = {
    width: '18rem'
}