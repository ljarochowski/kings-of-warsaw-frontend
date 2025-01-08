import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const userInfo = useSelector((state) => state.user.userInfo);

    if (!userInfo) {
        return <Typography>Please log in to view your profile.</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User Profile
            </Typography>
            <Typography variant="body1">Username: {userInfo.username}</Typography>
            <Typography variant="body1">Roles: {userInfo.roles.join(', ')}</Typography>
            {/* Add more user-specific information here */}
        </Container>
    );
};

export default UserProfile;

