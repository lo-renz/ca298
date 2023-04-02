import React from "react";
import { Link } from "react-router-dom";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainNavbar() {
    return (
        <div classNam="navbar">
            <div className="navbar-logo">
                Renso
            </div>

            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/degrees">Degrees</Link></li>
                <li><Link to="/cohorts">Cohorts</Link></li>
            </ul>
        </div>
    )
}

export default MainNavbar;