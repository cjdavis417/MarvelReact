import React from 'react';
import $ from 'jquery';
import MarvelChar from './MarvelChar';


var Ultron = new MarvelChar('Ultron', 'Ultron', 'blue');
var Loki = new MarvelChar('Loki', 'Loki', 'blue');

var GroupVillians = [Ultron, Loki];

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

            for(var i = 0; i < resultsLen; i++) {
                    
                var img = results[0].thumbnail.path + '.jpg';
                var name = results[0].name;
                var description = results[0].description;
            }

            FinalVillians.push({
                img: img, 
                name: name,
                description: description
            });
            
        })
    };

    VillianHTML = FinalVillians.map((member) =>
    <div className = 'card border-secondary p-3' style={cardStyle}>
        <div className = 'card-header'>{member.name}</div>
        <img src = {member.img} className="card-img-top" alt={member.name} />
        <div className = 'card-body'>
            <div className = 'card-text'>{member.description}</div>
        </div>
    </div>
    )


    return (
        <div className='container'>{VillianHTML}</div>
    )
};

export default Villians;

const cardStyle = {
    width: '18rem'
}