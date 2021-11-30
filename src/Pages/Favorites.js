import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { FavoriteContext } from '../context/Favorite';
import styled from 'styled-components';

const List = styled.div`
border: 1px solid lightgray;
margin : 10px 5px;
border-radius: 10px
`

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
          <div>
              <h1> Favoris </h1>
              
            {hotels.map(hotel => (
                <List> 
                    <div> 
                        <p>{hotel.name}</p>
                        <p> <b> {hotel.price}€ </b></p>
                    </div>
                    <div>
                        <button onClick={()=> {removeFavorite(); removeItem(hotel._id)}}> Supprimer des favoris</button>
                    </div>
                    
                </List>
              
            ))}
          </div>
        )
      
    
};

export default Favorites;