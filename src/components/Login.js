import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userSlice';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(username, password));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {t('login')}
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
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                    {loading ? 'Logging in...' : t('login')}
                </Button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </Container>
    );
};

export default Login;
