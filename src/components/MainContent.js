import React from 'react';
import PageStart from './PageStart';
import PageAbout from './PageAbout';
import PageArena from './PageArena';

const MainContent = () => {
    return (
        <div>
            <section id="start">
                <PageStart />
            </section>
            <section id="arena">
                <PageArena />
            </section>
            <section id="about">
                <PageAbout />
            </section>
            <section id="liga-mistrzow">
                <h2>Liga Mistrzów</h2>
                {/* Add content for the Liga Mistrzów section */}
            </section>
            <section id="liga-mistrzow-wyniki">
                <h2>Liga Mistrzów - Wyniki</h2>
                {/* Add content for the Liga Mistrzów - Wyniki section */}
            </section>
            <section id="turnieje">
                <h2>Turnieje</h2>
                {/* Add content for the Turnieje section */}
            </section>
            <section id="kings-of-war-gt-2024">
                <h2>Kings Of War GT 2024</h2>
                {/* Add content for the Kings Of War GT 2024 section */}
            </section>
            <section id="kontakt">
                <h2>Kontakt</h2>
                {/* Add content for the Kontakt section */}
            </section>
        </div>
    );
};

export default MainContent;


