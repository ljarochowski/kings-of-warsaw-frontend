import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

const TournamentRegistration = () => {
    const [tournamentId, setTournamentId] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post(`/api/tournaments/${tournamentId}/register`); // Adjust the API endpoint as needed
            alert('Successfully registered for the tournament!');
        } catch (error) {
            alert('Error registering for the tournament: ' + error.response.data.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Register for a Tournament
            </Typography>
            <TextField
                label="Tournament ID"
                value={tournamentId}
                onChange={(e) => setTournamentId(e.target.value)}
                variant="outlined"
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
        </Container>
    );
};

export default TournamentRegistration;
