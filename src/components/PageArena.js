import React from 'react';
import './PageArena.css';
import {Button} from "@mui/material"; // Import a CSS file for styles

const PageArena = () => {
    return (
        <div className="page arena">
            <div className="text-section">
                <h3>Welcome to the arena</h3>
                <h1>Explore Kings Of Warsaw Gaming Club</h1>
            </div>
            <div>
                <div className="image-section">
                    <img src="https://kingsofwarsaw.pl/images/a1bc2cc02e9cf1e2e3372c962adf88be.jpg" />
                </div>
                <div>
                    <h3>Kings Of WarSAW</h3>
                    <p>Step into Kings Of Warsaw: A community where gaming passion meets tradition. Discover our story and join the adventure.</p>
                    <Button variant="contained" href="#about">Explore Our Story</Button>
                    <a href="#about">Explore Our Story</a>
                </div>
            </div>
            <div>
                <div className="image-section">
                    <img src="https://kingsofwarsaw.pl/images/67caa81b3703c978390a24170f57d381.jpg" />
                </div>
                <div>
                    <h3>Polish Masters League</h3>
                    <p>Enter the realm of elite competition in the Polish Masters League. Conquer challenges, claim your glory, and rewrite the annals of gaming history.</p>
                    <a href="#about">Join the Elite</a>
                </div>
            </div>
            <div>
                <div className="image-section">
                    <img src="https://kingsofwarsaw.pl/images/8a4833390f388b020e672e5e4039df61.jpg" />
                </div>
                <div>
                    <h3>Tournaments</h3>
                    <p>Gear up for epic battles in our upcoming tournaments. Seize the chance to showcase your skill and emerge victorious!</p>
                    <a href="#about">Enter the Arena</a>
                </div>
            </div>
        </div>
    );
};

export default PageArena;

