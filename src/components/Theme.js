// Material-UI theme file

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
      overrides: {
        MuiDrawer: {
          background: '#f00',
        }
      }
})