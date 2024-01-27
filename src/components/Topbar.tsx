import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/topbar.css'

const Topbar = () => {

    return (
        <div className="containerTopbar">
            <div className="topbar">
                <Link className="linkTopbar" to="/">Home</Link>
                <Link className="linkTopbar" to="/about-me">About Me</Link>
                <Link className="linkTopbar" to="/my-journey">My Journey</Link>
                <Link className="linkTopbar" to="/contact">Contact</Link>
            </div>
        </div>
    );
};


export default Topbar;
