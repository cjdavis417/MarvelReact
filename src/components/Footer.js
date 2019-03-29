// Footer

import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function Footer() {
    return (
        <footer className='footer'>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={4}>
                    <i className="sprite sprite-avengers"></i>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Marvel: Avengers</Typography>
                    <Typography>Created by: C. Davis</Typography>
                    <Typography>Data Provided by Marvel. &copy; 2019 Marvel</Typography>
                </Grid>
            </Grid>
            
            
        </footer>
    )
}

export default Footer;
