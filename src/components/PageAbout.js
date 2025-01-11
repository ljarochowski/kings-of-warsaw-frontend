import React from 'react';
import './PageAbout.css'; // Import a CSS file for styles

const PageAbout = () => {
    return (
        <div className="page about">
            <div className="text-section">
                <h3>Welcome to Our Realm</h3>
                <h1>Kings Of WarSAW: Where Legends Gather</h1>
                <p>Welcome to Kings Of Warsaw, the heart and soul of tabletop gaming in Poland. At our core, we are a spirited community of Kings Of War enthusiasts, uniting players from every corner of the country. Our club is the battleground where strategy, camaraderie, and the thrill of competition come alive.</p>
                <h2>Exploring Kings Of War</h2>
                <p>Kings Of War isn't just any game - it's an immersive journey into a fantasy realm, where armies clash on the field of battle in epic confrontations. With its fast-paced gameplay and suspenseful finish, every match promises an unforgettable experience. Plus, the freedom to use any 28mm scale models lets your creativity take the lead. Curious to learn more about this fascinating world? Dive deeper at Mantic Games or get a feel for the action with beginner-friendly tutorials and gripping battle reports available on YouTube.</p>
            </div>
            <div className="image-section">
                <img src="https://kingsofwarsaw.pl/images/32d8ced6b3f0cc86592074251b0e31eb.jpg" alt="Tournament" />
            </div>
        </div>
    );
};

export default PageAbout;

