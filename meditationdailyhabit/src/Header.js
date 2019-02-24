import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';


export class Header extends Component {
    render() {
        return (
                <header className="header">
                    <img src={logo} alt="hamsa" width="60" />
                    <h1 className="header__logo">meditationdailyhabit</h1>
                </header>
        );
    }
}
