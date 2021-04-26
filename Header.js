import React from 'react';
import Logo from './Logo/Logo';
import TopNavBar from './TopNavBar/TopNavBar';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <Logo />
            <TopNavBar />
        </div>
    );
}

export default Header;