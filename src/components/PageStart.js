import React from 'react';
import './PageStart.css'; // Import a CSS file for styles

const PageStart = () => {
    return (
        <div className="start page">
            <div className="text-section">
            <img className="logo" src="https://kingsofwarsaw.pl/images/455c30ba4017636b752739a9e3cafec2.jpg" loading="lazy" sizes="(max-width: 375px) 48.90964574vw, (min-width: 375.05px) and (max-width: 480px) 38.21066073vw, (min-width: 480.05px) and (max-width: 768px) 23.88166296vw, (min-width: 768.05px) and (max-width: 1024px) 17.91124722vw, (min-width: 1024.05px) 13.42687932vw" />
                <h1>Kings Of WarSAW</h1>
                <h2>Tabletop Wargaming Club</h2>
                <p className="language">English</p>
            </div>
            <div className="image-section">
                <img src="https://kingsofwarsaw.pl/images/7db0113f22464cf5324a8000586eff86.jpg" alt="Colourfull minis ready for battle" />
            </div>
        </div>
    );
};

export default PageStart;

