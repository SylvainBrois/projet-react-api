import React from 'react';
import Navigation from "../components/Navigation";
import {Provider} from "react-redux";
import {Store} from "../components/Redux";
import Fav from "../components/Fav";

const Favourites = () => {
    return (
        <div>
            <Navigation/>
                <Fav/>
        </div>
    );
};

export default Favourites;