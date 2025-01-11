import React from 'react';
// import PageStart from './PageStart';
// import PageAbout from './PageAbout';
// import PageArena from './PageArena';
import {Avatar, Container, Grid2, Typography} from "@mui/material";
import ImageBlock from "./ImageBlock";
import ImageCard from "./ImageCard";

const MainContent = () => {
    return (
        <Grid2 container sx={{
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Grid2 size={6} id="start">
                <Avatar
                    alt="Kings Of WarSAW logo"
                    src="/static/logo.jpg"
                    sx={{ width: 129, height: 129}}
                />
                <Typography variant="h5">Tabletop Wargaming Club</Typography>
                <Typography variant="h3">Kings Of WarSAW</Typography>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="https://kingsofwarsaw.pl/images/7db0113f22464cf5324a8000586eff86.jpg"
                    alt="Colourfull minis ready for battle"
                    boxHeight="768px"
                    mt="-125px"
                />
            </Grid2>

            <Grid2 size={12} id="arena">
                <Typography variant="h6">
                    Welcome to the arena
                </Typography>
                <Typography variant="h3">
                    Explore Kings Of Warsaw Gaming Club
                </Typography>

                <Grid2 container spacing={4} sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Grid2 size={4}>
                        <Container sx={{width: 430}}>
                            <ImageCard
                                href={"#start"}
                                image={"/static/a1bc2cc02e9cf1e2e3372c962adf88be.jpg"}
                                title={"Kings Of WarSAW"}
                                action={"Explore Our Story"}
                                boxHeight="275px"
                            >
                                Step into Kings Of Warsaw: A community where gaming passion meets tradition.
                                Discover our story and join the adventure.
                            </ImageCard>
                        </Container>
                    </Grid2>
                    <Grid2 size={4}>
                        <Container sx={{width: 430}}>
                            <ImageCard
                                href={"#start"}
                                image={"/static/67caa81b3703c978390a24170f57d381.jpg"}
                                title={"Polish Masters League"}
                                action={"Join the Elite"}
                                boxHeight="275px"
                            >
                                Enter the realm of elite competition in the Polish Masters League. Conquer challenges,
                                claim your glory, and rewrite the annals of gaming history.
                            </ImageCard>
                        </Container>
                    </Grid2>
                    <Grid2 size={4}>
                        <Container sx={{width: 430}}>
                            <ImageCard
                                href={"#start"}
                                image={"/static/8a4833390f388b020e672e5e4039df61.jpg"}
                                title={"Tournaments"}
                                action={"Enter the Arena"}
                                boxHeight="275px"
                            >
                                Gear up for epic battles in our upcoming tournaments.
                                Seize the chance to showcase your skill and emerge victorious!
                            </ImageCard>
                        </Container>
                    </Grid2>
                </Grid2>
            </Grid2>

        </Grid2>
        // <div>

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


