import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
<ul>
    <NavLink to="/animes" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
        <li>Animes</li>
    </NavLink>
    <NavLink to="/mangas" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
        <li>Mangas</li>
    </NavLink>
    <NavLink to="/fav" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
        <li>Favourites</li>
    </NavLink>
    <NavLink to="/askgpt" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
        <li>AskGPT</li>
    </NavLink>
</ul>
            
        </div>
    );
};

export default Navigation;