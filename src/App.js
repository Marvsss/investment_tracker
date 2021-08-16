import React from 'react';
import './style/App.scss';

import Dashboard from './Pages/Dashboard.jsx';
import Settings from './Pages/Settings.jsx';

import  {WatchListContextProvider} from './Context/marketWatchList.jsx';
import { createTheme, ThemeProvider } from '@material-ui/core'; 
import NavBar from './Router/NavBar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'Poppins',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

function App() {


    return (
        <WatchListContextProvider>
            <ThemeProvider theme={theme}>
                <>
                    <Router>
                        <NavBar />
                        <Switch>
                            <Route path='/' exact component={Dashboard}/>
                            <Route path='/Settings' component={Settings}/>
                        </Switch>
                    </Router>
                </>
            </ThemeProvider>
        </WatchListContextProvider>
  );
}

export default App;
