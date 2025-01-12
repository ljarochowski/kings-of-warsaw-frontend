import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

import './App.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <MainContent />
                </Router>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
