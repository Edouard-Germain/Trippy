import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/Header';




const App = () => {
  return (
   
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Home/>}> </Route>
        <Route path="/city" element={<City/>}> </Route>
        <Route path="/hotels" element={<Hotels/>}> </Route>
        <Route path="/hotel" element={<Hotel/>}> </Route>
        <Route path="/room" element={<Room/>}> </Route>
        <Route path="/favorite" element={<Favorite/>}> </Route>
        <Route path="*" element={<NotFound/>}> </Route> */}

      </Routes>
    </BrowserRouter>
    
  );
};

export default App;