// Component to build app bar.

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {<Menu />}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="" className="navLink"><span sytle='font-weight: bold;'>Sci-Fi</span> Characters</Link>
          </Typography>
          <Button color="inherit"><Link to="/Marvel/index" className="navLink">Marvel</Link></Button>
          <Button color="inherit"><Link to="/StarWars/index" className="navLink">Star Wars</Link></Button>
          <Button color="inherit"><Link to="/about" className="navLink">About</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);