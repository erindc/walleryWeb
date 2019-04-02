import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { blueGrey, lightGreen, amber, red, orange } from "@material-ui/core/colors";
import './App.css';
import Home from './pages/HomePage';
import Gallery from './pages/GalleryPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[400]
    },
    secondary: {
      main: blueGrey[100]
    },
    accent: {
      main: amber['A400']
    },
    error: {
      main: red[900]
    },
    warning: {
      main: orange[800]
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 15
  },
});

const App = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
        </Switch>
      </MuiThemeProvider>
    );
};

export default App;
