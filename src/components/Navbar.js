import React from 'react';
import './Navbar.css'; // Import a CSS file for styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><a href="#start">Start</a></li>
                <li><a href="#arena">Witaj na arenie</a></li>
                <li><a href="#about">O Kings of WarSAW</a></li>
                <li><a href="#liga-mistrzow">Liga Mistrzów</a></li>
                <li><a href="#liga-mistrzow-wyniki">Liga Mistrzów - Wyniki</a></li>
                <li><a href="#turnieje">Turnieje</a></li>
                <li><a href="#kings-of-war-gt-2024">Kings Of War GT 2024</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;


