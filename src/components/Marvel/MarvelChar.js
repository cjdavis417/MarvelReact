import React, {Component} from 'react';
import $ from 'jquery';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';


class MarvelChar extends Component {
    constructor(id, name, shColor) {
        super()
        this.id = id;
        this.name = name;

        this.state = {
            open: false
        };
    }

    openModal = (e) => {
        e.preventDefault();
        this.modal.open();
    }

    async GetCharacter() {
        var finalString = [];

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
        <div>
            {/* <GridListTile key={imagePath} className='tile'>
                <img src={imagePath} alt={member.name} />
                <GridListTileBar
                title={member.name}
                subtitle={<span>ID: {member.id}</span>}
                actionIcon={
                    <IconButton className=''>
                    	<SvgIcon >
                        <path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                        </SvgIcon>			
                    </IconButton>
                    
                }/>
                
                	
            </GridListTile> */}

            </div>
        )
        
        return (
            finalString
        )
                
        
    }

    async GetComics() {
        console.log('comics func');

        
    }
}

export default MarvelChar;