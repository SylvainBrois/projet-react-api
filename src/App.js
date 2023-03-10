import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Animes from "./pages/Animes";
import Mangas from "./pages/Mangas";
import Favourites from "./pages/Favourites";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/animes" element={<Animes/>}/>
      <Route path="/mangas" element={<Mangas/>}/>
      <Route path="/fav" element={<Favourites/>}/>
      <Route path="*" element={<Animes/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
