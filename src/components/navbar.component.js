import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Professional Portfolio</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/about-me" className="nav-link">About Me</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact-info" className="nav-link">Contact Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}