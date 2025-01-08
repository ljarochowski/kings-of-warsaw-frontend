import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to Kings of Warsaw
            </Typography>
            <Typography variant="body1" paragraph>
                We are dedicated to organizing Kings of War tournaments in Warsaw. Join us for exciting battles and a chance to showcase your skills!
            </Typography>
            <Typography variant="body1" paragraph>
                Check out the rankings, register for tournaments, and upload your army lists to compete!
            </Typography>
        </Container>
    );
};

export default Home;
