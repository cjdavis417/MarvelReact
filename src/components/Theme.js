// Material-UI theme file

import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    root: {
      backgroundColor: 'black',
    },
    palette: {
        primary: {
          main: '#b23c17'
        },
        secondary: {
          main: '#ff784e'
        },
      },
      overrides: { // couldn't figure out how to get this to work.
        MuiDrawer: {
          background: '#f00',
        }
      }
})