import React from 'react';
import {Grid2, Typography} from '@mui/material';
import ImageBlock from "./ImageBlock";
import Logo from "./Logo";

const Home = () => {
    return (
        <Grid2 size={12} container>
            <Grid2 size={12}>
                <a id="home" aria-hidden="true" className="anchor"></a>
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Logo size={129} />
                <Typography variant="h5">Tabletop Wargaming Club</Typography>
                <Typography variant="h3">Kings Of WarSAW</Typography>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/7db0113f22464cf5324a8000586eff86.jpg"
                    alt="Colourfull minis ready for battle"
                    boxHeight="768px"
                />
            </Grid2>
        </Grid2>
    );
};

export default Home;
