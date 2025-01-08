import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('ROLE_USER');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users', { username, password, role });
            alert(t('success'));
        } catch (error) {
            alert(t('error') + ': ' + error.response.data.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {t('register')}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label={t('username')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    fullWidth
                />
                <TextField
                    type="password"
                    label={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                />
                <TextField
                    select
                    label={t('roles')}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    fullWidth
                >
                    <option value="ROLE_USER">{t('roles.user')}</option>
                    <option value="ROLE_ORGANIZER">{t('roles.organizer')}</option>
                    <option value="ROLE_ADMIN">{t('roles.admin')}</option>
                </TextField>
                <Button type="submit" variant="contained" color="primary">
                    {t('register')}
                </Button>
            </form>
        </Container>
    );
};

export default Register;
