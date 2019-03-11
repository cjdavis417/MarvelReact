import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import $ from 'jquery';
import MarvelChar from './MarvelChar';

var Avenger1 = new MarvelChar('Avenger1', 'Avenger', 'ff0000');
var IronMan = new MarvelChar('IronMan', 'Iron Man', '4b0082');
var CaptAmerica = new MarvelChar('CaptAmerica', 'Captain America', 'yellow');
var Thor = new MarvelChar('Thor', 'Thor', 'blue');
var Hulk = new MarvelChar('Hulk', 'Hulk', 'purple');
var IronPatriot = new MarvelChar('IronPatriot', 'Iron Patriot (James Rhodes)', 'purple');
var Vision = new MarvelChar('Vision', 'Vision', 'purple');
var HankPym = new MarvelChar('HankPym', 'Hank Pym', 'purple');
var Daredevil = new MarvelChar('Dardevil', 'Daredevil', 'black');
var Deadpool = new MarvelChar('Deadpool', 'Deadpool', 'teal');
var BlackPanther = new MarvelChar('BlackPanther', 'Black Panther', 'blue');
var BlackWidow = new MarvelChar('BlackWidow', 'Black Widow', 'teal');
var SpiderMan = new MarvelChar('SpiderMan', 'Spider-Man', 'yellow');

const GroupAvengers = [Avenger1, IronMan, CaptAmerica, Thor, Hulk, SpiderMan, IronPatriot, Vision, HankPym, Daredevil, Deadpool, BlackPanther, BlackWidow];

var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
var APIkey = '509dae0442a04443238ccd706605db14';
var hash = '5bcfc1939107267c15cc5d863348fffd';

var FinalAvengers = []; // collects selected data from API
var finalString = []; // maps 'FinalAvenger' into html

const Avengers = () => {
    for (var z = 0; z < GroupAvengers.length; z++) {
        $.getJSON(marvelAPI, {
            name: GroupAvengers[z].name,
            limit: 100,
            ts: '1',
            apikey: APIkey,
            hash: hash
        })
        .done(function(response) {
            var results = response.data.results;
            var resultsLen = results.length;

            var img =" ";
            var name = "";
            var description = "";

            results.forEach(element => {
                img = element.thumbnail.path + '.jpg';
                name = element.name;
            
                if (element.description.length > 0) {
                    description = element.description;
                } else {
                    description = "API is blank."
                }
            });

            FinalAvengers.push({
                img: img, 
                name: name,
                description: description
            });
            console.log(FinalAvengers);

        });
    };

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

    return (
        <div className="container">{finalString}</div>
        
    );
};

export default Avengers;

const cardStyle = {
    width: '18rem'
}



