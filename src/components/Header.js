import React from 'react';
import headerLogo from '../images/calorieZen.png';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={headerLogo} alt="logo"/>
            <h1 className="header__header">Calorie-Zen</h1>
        </div>
    );
}
