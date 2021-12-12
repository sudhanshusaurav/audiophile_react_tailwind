import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul className="flex gap-4 md:gap-8 flex-col md:flex-row">
                <li><NavLink to="/" className="text-white hover:text-primaryLight">HOME</NavLink></li>
                <li><NavLink to="/headphones" className="text-white hover:text-primaryLight">HEADPHONES</NavLink></li>
                <li><NavLink to="/speakers" className="text-white hover:text-primaryLight">SPEAKERS</NavLink></li>
                <li><NavLink to="/earphones" className="text-white hover:text-primaryLight">EARPHONES</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu
