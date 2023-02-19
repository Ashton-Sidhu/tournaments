import React from 'react';
import { Button } from 'antd';
import './header.scss';

interface HeaderProps {
    onEventsClick: () => void;
    onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEventsClick, onAboutClick }) => {
    return (
        <div className="header">
            <h2 className="header__title">Sport Events</h2>
            <div className="header__buttons">
                <Button className="header__button" type="text" onClick={onEventsClick}>Events</Button>
                <Button className="header__button" type="text" onClick={onAboutClick}>About</Button>
            </div>
        </div>
    );
};

export default Header;
