// Component to creat a section header.

import React, {Component} from 'react';

// Material-UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class SectionBar extends Component {

    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' color='inherit'>{this.props.section}</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default SectionBar