import React from 'react';
import {
    Grid2,
} from "@mui/material";
import Home from "./Home";
import WelcomeToTheArena from "./WelcomeToTheArena";
import AboutKingsOfWarsaw from "./AboutKingsOfWarsaw";
import PolishMastersLeague from "./PolishMastersLeague";
import PolishMasterLeagueStandings from "./PolishMasterLeagueStandings";
import Tournaments from "./Tournaments";

const MainContent = () => {
    return (
        <Grid2 container sx={{
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Home />
            <WelcomeToTheArena />
            <AboutKingsOfWarsaw />
            <PolishMastersLeague />
            <PolishMasterLeagueStandings />
            <Tournaments />


        </Grid2>
        //     <section id="kings-of-war-gt-2024">
        //         <h2>Kings Of War GT 2024</h2>
        //         {/* Add content for the Kings Of War GT 2024 section */}
        //     </section>
        //     <section id="kontakt">
        //         <h2>Kontakt</h2>
        //         {/* Add content for the Kontakt section */}
        //     </section>
        // </div>
    );
};

export default MainContent;


