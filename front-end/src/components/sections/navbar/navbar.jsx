
import React, { Component } from 'react';
import Button from '../../atoms/Button/Button';
import Logo from '../../atoms/Logo/Logo';
import TitleDisplay from '../../atoms/TitleDisplay/TitleDisplay';

import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbarstyles">
            <Button text="< Back" bgColor="bg-dark-gray" textColor="text-white" />
            <TitleDisplay text="Hotel Details" textColor="text-white"/>
            <Logo />
        </nav>);
    }
}