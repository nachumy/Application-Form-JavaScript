import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


const Header = (props) => {
    return (
        <header>
            <div id="maintitle">
                    <ul>
                        <li><NavLink exact to="/personal" >Personal Information</NavLink></li>
                        <li><NavLink exact to="/skills" >Skills and location</NavLink></li>
                        <li><NavLink exact to="/portfolio" >Portfolio</NavLink></li>
                    </ul>
                <h1>Let's talk</h1>
                <p>Think you have what it takes? Show us.</p>
            </div>
        </header>
    );
}

export default Header;