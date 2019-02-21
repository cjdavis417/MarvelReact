import React, {Component} from 'react';

const AvengerTeam = [
    {id: 1, name: "Captain America"},
    {id: 2, name: "Iron Man"},
    {id: 3, name: "Hulk"},
    {id: 4, name: "Thor"},
    {id: 5, name: "Black Widow"}
];

const members = AvengerTeam.map((item, key) =>
<li key={item.id}>{item.name}</li>
);

var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';

$.getJSON(marvelAPI, {
    name: avengers[z].name,
    limit: 100,
    apikey: '',
    hash: ''
})
.done(function(response) {

})

const Avengers = () => {
    return (
        //<h2>Avengers</h2>
        <div>
            <h3>Members:</h3>
            <ul>{members}</ul>
        </div>
        

    );
};

export default Avengers;




