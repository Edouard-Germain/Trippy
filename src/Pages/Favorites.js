import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { FavoriteContext } from '../context/Favorite';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
`

const List = styled.div`
border: 2px solid rgb(33,158,188);
margin : 15px;
border-radius: 10px;
display : flex;
justify-content: space-between;
width: 50%;
padding: 15px;
font-family: 'Roboto', sans-serif;
`

const Button = styled.button`
border : 2px solid rgb(33,158,188);
color: rgb(33,158,188);
background-color: white;
border-radius: 20px;
padding: 7px;
margin: 7px;
cursor: pointer;

&:hover {
  background-color: rgb(33,158,188);
  color : white;
}

&:active {
  position:relative;
	top:1px;
}
`



const H1 = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 800`


const Favorites = () => {
    const {isFavorite, removeFavorite} = useContext(FavoriteContext)
    
        const [hotels, setHotels] = useState([])
      
        useEffect(() => {
          const favorites = JSON.parse(localStorage.getItem("favorites"))
          
          const promiseArray = favorites.map(id => {
            return fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
          })
      
          Promise.all(promiseArray)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(responses => setHotels(responses.map(r => r.result)))
        }, [])

        const removeItem = (id) => {
            let find = hotels.find(e => e._id === id)
            
                hotels.splice(find, 1) 
            
        }
      
        return (
        <>
              <Header />
              <H1> Favoris </H1>
              <Container>
            
              {hotels.map(hotel => (
                
                  <List> 
                      <div> 
                          <p>{hotel.name}</p>
                          <p> <b> {hotel.price}€ </b></p>
                      </div>
                      <div>
                          <Button onClick={()=> {removeFavorite(); removeItem(hotel._id)}}> Supprimer des favoris</Button>
                      </div>
                      
                  </List>
                
                
              ))}
              </Container>
            
            
          
        </>
        )
      
    
};

export default Favorites;