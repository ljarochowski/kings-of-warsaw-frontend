import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

import './App.css'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <MainContent />
            </Router>
        </Provider>
    );
};

export default App;
