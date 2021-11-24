import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import City from './Pages/City';
import Home from './Pages/Home'
import { CityContextProvider } from './context/City';
import Header from './components/Header';






const App = () => {
  return (
    <CityContextProvider> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route> 
          <Route path="/hotels/:city" element={<City/>}> </Route>
          {/* // <Route path="/hotel:id" element={<Hotel/>}> </Route>
          // <Route path="/room" element={<Room/>}> </Route>
          // <Route path="/favorite" element={<Favorite/>}> </Route>
          // <Route path="*" element={<NotFound/>}> </Route>  */} 
        </Routes>
      </BrowserRouter>
    </CityContextProvider>
    
  );
};

export default App;