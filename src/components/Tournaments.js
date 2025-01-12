import React from "react";
import {Grid2, Typography} from "@mui/material";

const Tournaments = () => {
    return (
        <Grid2 container size={12} className="tournaments">
            <Grid2 size={12}>
                <a id="tournaments" aria-hidden="true" className="anchor"></a>
            </Grid2>
            <Grid2 size={12} className="text-section">
                <Typography variant="h3">
                    Upcoming Tournaments
                </Typography>
                <Typography variant="body1">
                    Our arena is always buzzing with the promise of glory. Here's what's on the horizon:
                </Typography>

            </Grid2>
        </Grid2>
    );
};

export default Tournaments;