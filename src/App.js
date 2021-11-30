import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import City from './Pages/City';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import { CityContextProvider } from './context/City';
import Header from './components/Header';
import Room from './Pages/Room';
import Favorites from './Pages/Favorites'
import { FavoriteContextProvider } from './context/Favorite';



const App = () => {
  return (
    <FavoriteContextProvider>
      <CityContextProvider> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route> 
          <Route path="/hotels/:city" element={<City/>}> </Route>
           <Route path="/hotel/:id" element={<Hotel/>}> </Route>
           {/*  */}
           <Route path="/Room" element={<Room/>}> </Route>
          <Route path="/favorite" element={<Favorites/>}> </Route>
          {/* <Route path="*" element={<NotFound/>}> </Route>   */}

        </Routes>
      </BrowserRouter>
      </CityContextProvider>
    </FavoriteContextProvider>
    
    // ajouter :id à hotel
  );
};

export default App;