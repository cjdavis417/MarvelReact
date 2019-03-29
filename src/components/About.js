import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

class About extends Component {


    render() {

        return ( 
            <div className='wrapper'>
                <Typography variant='h2'>About</Typography>
                <Typography variant='h3'>SciFi React</Typography>
                <Typography variant='h5'>This is a project for <a href='https://www.codelouisville.org'>Code Louisville</a> Javascript-React class.</Typography>

                <Typography variant='h5'>This website is a bunch of Marvel characters and Star Wars data written in React.</Typography>

                <Typography variant='h5'>Please note, this is work in progress.</Typography>
                <br /><br />
                <Typography variant='h4'>Technologies used:</Typography>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Flexbox</li>
                    <li>Javascript</li>
                    <li>Responsive Web Design</li>
                    <li>JQuery-3.3.1</li>
                    <li>Marvel API</li>
                    <li>Star Wars API</li>
                </ul> 
            </div>
        )
    }


}

export default About;