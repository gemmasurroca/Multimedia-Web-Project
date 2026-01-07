import React from 'react';

const Header = () => {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    };

    return (
        <header className="header">
            <strong style={{ fontSize: '24px' }}>
                Olot Tourism
            </strong>
            <nav>
                <a className="nav-item" onClick={() => scrollTo('intro')}>Introduction </a>
                <a className="nav-item" onClick={() => scrollTo('multimedia')}>Discover</a>
                <a className="nav-item" onClick={() => scrollTo('activities')}>Activities</a>
            </nav>
        </header>
    );
};
export default Header;
