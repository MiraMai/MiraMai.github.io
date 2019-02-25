import React, { Component } from 'react';
import './Style.css';

export class Sidebar extends Component {
    render() {
        return (
            <div className="col-12 col-lg-3">
            <div className="sidebar">
              <p className="search_by_category">Search by category</p>
              <ul className="list_in_sidebar">
                <li>Anti-stress</li>
                <li>Chacras</li>
                <li>Etheric body</li>
                <li>Guided Meditations</li>
                <li>Mantras</li>
                <li>Meditation Tools</li>
                <li>Personal Development</li>
                <li>Yoga</li>
              </ul>
            </div>
          </div>
        );
    }
}