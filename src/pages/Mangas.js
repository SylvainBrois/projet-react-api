import React from 'react';
import Navigation from "../components/Navigation";
import MangaApiCall from "../components/mangas/MangaApiCall";

const Mangas = () => {
    return (
        <div>
            <Navigation/>
            <MangaApiCall/>
        </div>
    );
};

export default Mangas;