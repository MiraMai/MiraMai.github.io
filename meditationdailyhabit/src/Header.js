import React, { Component } from 'react';
import './Header.css';


export class Header extends Component {
    render() {
        return (
                <header className="header">
                    <h1 className="header__logo">meditationdailyhabit</h1>
                </header>
        );
    }
}
