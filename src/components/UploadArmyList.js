import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';

const UploadArmyList = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('armyList', file);

        try {
            await axios.post('/api/tournaments/upload-army-list', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Army list uploaded successfully!');
        } catch (error) {
            alert('Error uploading army list: ' + error.response.data.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Upload Army List
            </Typography>
            <input type="file" onChange={handleFileChange} />
            <Button variant="contained" color="primary" onClick={handleUpload}>
                Upload
            </Button>
        </Container>
    );
};

export default UploadArmyList;
