import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {FavouritesPage} from "./pages/favourites/FavouritesPage";
import {Navigation} from "./components/Navigation";
import {HomePage} from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
      </Routes>
    </>
  );
}

export default App;
