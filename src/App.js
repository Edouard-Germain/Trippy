import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import City from './Pages/City';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import { CityContextProvider } from './context/City';
import Header from './components/Header';
import Room from './Pages/Room';






const App = () => {
  return (
    <CityContextProvider> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route> 
          <Route path="/hotels/:city" element={<City/>}> </Route>
           <Route path="/hotel" element={<Hotel/>}> </Route>
           <Route path="/Room" element={<Room/>}> </Route>

         
          {/* // <Route path="/favorite" element={<Favorite/>}> </Route>
          // <Route path="*" element={<NotFound/>}> </Route>  */} 
         */}
        </Routes>
      </BrowserRouter>
    </CityContextProvider>
    // ajouter :id à hotel
  );
};

export default App;