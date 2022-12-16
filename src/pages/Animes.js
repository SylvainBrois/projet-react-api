import React from 'react';
import Navigation from "../components/Navigation";
import AnimesAPICall from "../components/animes/AnimesAPICall";

const Animes = () => {
    return (
        <div>
            <Navigation/>
            <AnimesAPICall/>
        </div>
    );
};

export default Animes;