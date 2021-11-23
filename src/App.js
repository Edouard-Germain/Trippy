import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Pages/Home'
import { CityContextProvider } from './context/City';





const App = () => {
  return (
    <CityContextProvider> 
      <BrowserRouter>
        <Home />
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route> 
          {/* <Route path="/city" element={<City/>}> </Route>
          <Route path="/hotel" element={<Hotel/>}> </Route>
          <Route path="/room" element={<Room/>}> </Route>
          <Route path="/favorite" element={<Favorite/>}> </Route>
          <Route path="*" element={<NotFound/>}> </Route>  */}
        </Routes>
      </BrowserRouter>
    </CityContextProvider>
    
  );
};

export default App;