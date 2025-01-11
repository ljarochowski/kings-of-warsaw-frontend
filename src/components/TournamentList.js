import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios'; // Use the configured Axios instance

const TournamentList = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await axios.get('/api/tournaments');
                if (response.data && Array.isArray(response.data.member)) {
                    setTournaments(response.data.member); // Use the 'member' array
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching tournaments:', error);
            }
        };

        fetchTournaments();
    }, []);

    return (
        <div>
            <h2>Tournament List</h2>
            <ul>
                {tournaments.map(tournament => (
                    <li key={tournament.id}>
                        <Link to={`/tournaments/${tournament.id}`}>{tournament.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TournamentList;

