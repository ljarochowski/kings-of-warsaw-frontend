import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import MyAppBar from './components/AppBar';
import Home from './components/Home';
import Rankings from './components/Rankings';
import UserProfile from './components/UserProfile';
import TournamentRegistration from './components/TournamentRegistration';
import UploadArmyList from './components/UploadArmyList';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <MyAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rankings" element={<Rankings />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/tournament/register" element={<TournamentRegistration />} />
                    <Route path="/tournament/upload-army-list" element={<UploadArmyList />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
