import React from 'react';
// import PageStart from './PageStart';
// import PageAbout from './PageAbout';
// import PageArena from './PageArena';
import {Avatar, Grid2} from "@mui/material";
import ImageBlock from "./ImageBlock";

const MainContent = () => {
    return (
        <Grid2 container sx={{
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Grid2 size={6}>
                <Avatar
                    alt="Kings Of WarSAW logo"
                    src="/static/logo.jpg"
                    sx={{ width: 129, height: 129}}
                />
                <h2>Tabletop Wargaming Club</h2>
                <h1>Kings Of WarSAW</h1>
                <p className="language">English</p>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="https://kingsofwarsaw.pl/images/7db0113f22464cf5324a8000586eff86.jpg"
                    alt="Colourfull minis ready for battle"
                    boxHeight="768px"
                    mt="-125px"
                />
            </Grid2>
        </Grid2>
        // <div>
        //     <section id="start">
        //         <PageStart />
        //     </section>
        //     <section id="arena">
        //         <PageArena />
        //     </section>
        //     <section id="about">
        //         <PageAbout />
        //     </section>
        //     <section id="liga-mistrzow">
        //         <h2>Liga Mistrzów</h2>
        //         {/* Add content for the Liga Mistrzów section */}
        //     </section>
        //     <section id="liga-mistrzow-wyniki">
        //         <h2>Liga Mistrzów - Wyniki</h2>
        //         {/* Add content for the Liga Mistrzów - Wyniki section */}
        //     </section>
        //     <section id="turnieje">
        //         <h2>Turnieje</h2>
        //         {/* Add content for the Turnieje section */}
        //     </section>
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


