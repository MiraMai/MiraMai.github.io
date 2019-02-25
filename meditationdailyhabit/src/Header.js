import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
import hamsa2 from './hamsa2.png';



export class Header extends Component {
    render() {
        return (
                <header className="header">
                    <img src={logo} alt="hamsa" width="60" className="logo" />
                    <h1 className="header__logo">meditationdailyhabit</h1>
                </header>
        );
    }
}
