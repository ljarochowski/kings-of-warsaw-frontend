import React from "react";
import {Container, Grid2, Typography} from "@mui/material";
import ImageCard from "./ImageCard";

const WelcomeToTheArena = ({}) => {
    return (
        <Grid2 size={12} className="text-section welcome-to-the-arena">
            <a id="welcome-to-the-arena" aria-hidden="true" className="anchor"></a>
            <Typography variant="h6">
                Welcome to the arena
            </Typography>
            <Typography variant="h3">
                Explore Kings Of Warsaw Gaming Club
            </Typography>

            <Grid2 container spacing={0} sx={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "-20px",
            }}>
                <Grid2 size={4}>
                    <Container sx={{width: 430}}>
                        <ImageCard
                            href={"#start"}
                            image={"/static/a1bc2cc02e9cf1e2e3372c962adf88be.jpg"}
                            title={"Kings Of WarSAW"}
                            action={"Explore Our Story"}
                            boxHeight="275px"
                            imgHeight="300px"
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
                            imgHeight="300px"
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
                            imgHeight="300px"
                        >
                            Gear up for epic battles in our upcoming tournaments.
                            Seize the chance to showcase your skill and emerge victorious!
                        </ImageCard>
                    </Container>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default WelcomeToTheArena;