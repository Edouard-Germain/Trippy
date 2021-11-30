import React, { useEffect, useState, useRef } from 'react';
import { useContext } from 'react';

import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
// import arrayImage from '../images.json'
import {BsStar} from 'react-icons/bs'
import Favorites from './Favorites';
import HotelCard from '../components/HotelCard';
import { FavoriteContext } from '../context/Favorite';
import { CityContext } from '../context/City';
const MapContainer = styled.div`
height: 50vh;
width: 100%;
@media (min-width: 800px) {
    height: 100vh;
}`

const ListContainer = styled.div`
height: 50vh;
width: 100%;
overflow: scroll;
@media (min-width: 800px) {
    height: 100vh;
}
`
const List = styled.div`
border: 1px solid lightgray;
margin : 10px 5px;
border-radius: 10px
`
const Container = styled.div`
display : block;
@media (min-width: 800px) {
    display : flex;
}
`
const BUTTON2 = styled.button`
background-color : white;
color : #ffbe0b`

const BUTTON1 = styled.button`
background-color : #ffbe0b;
color : white`

const City = () => {
    const {city} = useParams()
    const  [page,setPage] = useState(1)
    const [hotels, setHotels] = useState(null)
   
    // const [favoritePage, setFavoritePage] = useState([])
    const {selectedHotel} = useContext(CityContext)
    const ref = useRef()
    const {onClickFavorite, isFavorite, removeFavorite} = useContext(FavoriteContext)
    

    // const  Hotel = ({hotel})
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`)
      .then(response => response.json())
      .then(data => setHotels(data))
    },[page,city])

     const choosePage = (num) =>{
            setPage(num)
    }
    const PreviousPage = () => {
        if (page >1){
            setPage(page-1)
        }
    }

   

    if(hotels == null) {
        return null
    } else {
        
        return (
        
            <Container>
                
                <ListContainer> 
                {hotels.results.map((hotel, index) => 
                <> 
                    <HotelCard hotel={hotel} selectedHotel={selectedHotel}>

                    </HotelCard>

                    <List  id={hotel}
                   selectedHotel={selectedHotel}>
                    
                   {isFavorite(hotel._id) ? (<BUTTON1> <BsStar onClick={() => removeFavorite(hotel._id)}/> </BUTTON1>) : (<BUTTON2> <BsStar onClick={() => onClickFavorite(hotel._id)}/> </BUTTON2>) }
                    {/* <img src={src} alt={hotel.phone} /> */}
                     <Link to={`/hotel/${hotel._id}`} >
                    <p> {hotel.name} </p>
                    <p> {hotel.phone} </p>
                    <p> {hotel.stars} </p>
                    </Link>
                   </List> 
                </>
                    
                
                )}
                    <button onClick={() => {choosePage(1)}}>1</button>
                    <button onClick={() => {choosePage(2)}}>2</button>
                    <button onClick ={() => {choosePage(3)}}>3</button>
                    <button onClick ={()=>{choosePage(4)}}>4</button>
                </ListContainer>
                <MapContainer>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={{
                            lat : hotels.center.lat,
                            lng : hotels.center.lon}}
                            defaultZoom={12}
                    >
                        {hotels.results.map(hotel =>
                        <Marker
                            lat={hotel.location.lat}
                            lng={hotel.location.lon}
                            price={hotel.price}
                            name={hotel.name}
                            hotel = {hotel}
                        />
                        )}
                    </GoogleMapReact>
                </MapContainer>
                
            </Container>
               
        );
    }
    
};

export default City;