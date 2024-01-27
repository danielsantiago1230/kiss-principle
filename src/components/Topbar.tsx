import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/topbar.css'

const Topbar = () => {

    return (
        <div className="container">
            <div className="topbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about-me">About Me</Link>
                <Link className="link" to="/my-journey">My Journey</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </div>
    );
};


export default Topbar;
