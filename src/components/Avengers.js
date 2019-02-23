import React, {Component} from 'react';
import $ from 'jquery';
const MarvelChar = require('./MarvelChar.js').default;

var Avenger1 = new MarvelChar('Avenger1', 'Avenger', 'ff0000');
var IronMan = new MarvelChar('IronMan', 'Iron Man', '4b0082');
var CaptAmerica = new MarvelChar('CaptAmerica', 'Captain America', 'yellow');
var Thor = new MarvelChar('Thor', 'Thor', 'blue');
var Hulk = new MarvelChar('Hulk', 'Hulk', 'purple');
var SpiderMan = new MarvelChar('SpiderMan', 'Spider-Man', 'yellow');
var IronPatriot = new MarvelChar('IronPatriot', 'Iron Patriot (James Rhodes)', 'purple');
var Vision = new MarvelChar('Vision', 'Vision', 'purple');
var HankPym = new MarvelChar('HankPym', 'Hank Pym', 'purple');
var Daredevil = new MarvelChar('Dardevil', 'Daredevil', 'black');
var Deadpool = new MarvelChar('Deadpool', 'Deadpool', 'teal');
var BlackPanther = new MarvelChar('BlackPanther', 'Black Panther', 'blue');
var BlackWidow = new MarvelChar('BlackWidow', 'Black Widow', 'teal');

var avengers = [Avenger1, IronMan, CaptAmerica, Thor, Hulk, SpiderMan, IronPatriot, Vision, HankPym, Daredevil, Deadpool, BlackPanther, BlackWidow];

var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
var APIkey = '509dae0442a04443238ccd706605db14';
var hash = '5bcfc1939107267c15cc5d863348fffd';

var FinalAvenger = [];
var finalString = [];

const Avengers = () => {
    for (var z = 0; z < avengers.length; z++) {
        $.getJSON(marvelAPI, {
            name: avengers[z].name,
            limit: 100,
            ts: '1',
            apikey: APIkey,
            hash: hash
        })
        .done(function(response) {
            var results = response.data.results;
            var resultsLen = results.length;

            for(var i = 0; i < resultsLen; i++) {
                
                var img = results[0].thumbnail.path + '.jpg';
                var name = results[0].name;
                var description = results[0].description;

            }

            FinalAvenger.push({
                img: img, 
                name: name,
                description: description
            });
            console.log(FinalAvenger);

        });
    };

    finalString = FinalAvenger.map((member) =>
        <div className = 'card border-secondary p-3' style={cardStyle}>
            <div className = 'card-header'>{member.name}</div>
            <img src = {member.img} className="card-img-top" alt={member.name} />
            <div className = 'card-body'>
                <div className = 'card-text'>{member.description}</div>
            </div>
        </div>
    )

    return (
        <div>{ finalString }</div>
        
    );
};

export default Avengers;

const cardStyle = {
    width: '18rem'
}





