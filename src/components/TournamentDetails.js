import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'; // Use the configured Axios instance

const TournamentDetails = () => {
    const { id } = useParams();
    const [tournament, setTournament] = useState(null);

    useEffect(() => {
        const fetchTournament = async () => {
            try {
                const response = await axios.get(`/api/tournaments/${id}`);
                setTournament(response.data);
            } catch (error) {
                console.error('Error fetching tournament details:', error);
            }
        };

        fetchTournament();
    }, [id]);

    if (!tournament) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{tournament.name}</h2>
            <p>Date Start: {new Date(tournament.dateStart).toLocaleString()}</p>
            <p>Date End: {new Date(tournament.dateEnd).toLocaleString()}</p>
            <p>Place: {tournament.place}</p>
            <p>Tournament Pack: {tournament.tournamentPack}</p>
        </div>
    );
};

export default TournamentDetails;

