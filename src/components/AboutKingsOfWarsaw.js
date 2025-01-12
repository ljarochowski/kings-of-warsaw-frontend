import React from "react";
import {Grid2, Typography} from "@mui/material";
import ImageBlock from "./ImageBlock";

const AboutKingsOfWarsaw = ({}) => {
    return (
        <Grid2 size={12} container className="about-kings-of-warsaw">
            <Grid2 size={12}>
                <a id="about-kings-of-warsaw" aria-hidden="true" className="anchor"></a>
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Typography variant="h6">Welcome to Our Realm</Typography>
                <Typography variant="h3">Kings Of WarSAW: Where Legends Gather</Typography>
                <Typography variant="body1">
                    Welcome to Kings Of Warsaw, the heart and soul of tabletop gaming in Poland. At our core, we are
                    a spirited community of Kings Of War enthusiasts, uniting players from every corner of the country.
                    Our club is the battleground where strategy, camaraderie, and the thrill of competition come alive.
                </Typography>
                <Typography variant="h3">Exploring Kings Of War</Typography>
                <Typography variant="body1">
                    Kings Of War isn't just any game - it's an immersive journey into a fantasy realm, where armies
                    clash on the field of battle in epic confrontations. With its fast-paced gameplay and suspenseful
                    finish, every match promises an unforgettable experience. Plus, the freedom to use any 28mm scale
                    models lets your creativity take the lead. Curious to learn more about this fascinating world?
                    Dive deeper at Mantic Games or get a feel for the action with beginner-friendly tutorials and
                    gripping battle reports available on YouTube.
                </Typography>
            </Grid2>
            <Grid2 size={6}>
                <ImageBlock
                    src="/static/32d8ced6b3f0cc86592074251b0e31eb.jpg"
                    alt="Celestials fighting Oskan"
                    boxHeight="970px"
                    mt="0px"
                />
            </Grid2>

            <Grid2 size={6}>
                <ImageBlock
                    src="/static/cca8cdf1b8920939a7b97b34505b09cb.jpg"
                    alt="Vampire armies clash against Orcs"
                    boxHeight="1005px"
                    mt="0px"
                />
            </Grid2>
            <Grid2 size={6} className="text-section">
                <Typography variant="h3">Venue Spotlight: Adeptus Mechanicus</Typography>
                <Typography variant="body1">
                    Our home is the Adeptus Mechanicus Club, located at Al. Krakowska 110/114 in Warsaw—just look for
                    the imposing building crowned with the AIRBUS sign. Find us here and ascend to the top floor to
                    enter a realm where imagination meets reality. This space is more than just a venue; it's where
                    bonds are forged over dice rolls and strategic moves.
                </Typography>
                <Typography variant="h3">What We Offer</Typography>
                <Typography variant="body1">
                    <strong>Monthly Tournaments:</strong> Dive into the competitive spirit with our monthly
                    Kings Of War tournaments. Whether you're a seasoned veteran or stepping onto the battlefield
                    for the first time, there's a place for you here.
                </Typography>
                <Typography variant="body1">
                    <strong>Polish Masters League:</strong> Elevate your game and strive for glory in the
                    Polish Masters League. As a beacon of high-level play, the league is your pathway to national
                    recognition and beyond.
                </Typography>
                <Typography variant="body1">
                    In Kings Of Warsaw, we’re not just playing games; we're building legends. Join us and become
                    part of a story where every move could turn the tides of war. Whether you're here to challenge
                    the champions, make lifelong friends, or simply explore the depths of Kings Of War, you'll find
                    your next great adventure with us.
                </Typography>
            </Grid2>
        </Grid2>
    );
};

export default AboutKingsOfWarsaw;