import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAppBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Kings of Warsaw
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/rankings">Rankings</Button>
                <Button color="inherit" component={Link} to="/tournaments">Tournaments</Button> {/* Add Tournaments link */}
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;

