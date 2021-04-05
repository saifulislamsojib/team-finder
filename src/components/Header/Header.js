import React from 'react';
import './Header.css';

const Header = ({logo}) => {
    return (
        <header className="banner d-flex align-items-center justify-content-center">
            { logo ? <img className="img-fluid logo-img" src={logo} alt=""/> : <h1 className="text-white shadow-lg">Team Finder</h1>}
        </header>
    );
};

export default Header;