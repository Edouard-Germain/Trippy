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
import { FavoriteContext } from '../context/Favorite';

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
    const [selectedBar, setSelectedBar] = useState({})
    const {onClickFavorite, isFavorite, removeFavorite} = useContext(FavoriteContext)
    

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`)
      .then(response => response.json())
      .then(data => setHotels(data))
    },[])
    

   



    const NextPage = () => {
        if (page < 4){
            setPage(page +1 )
        }
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
    
                
                    
                   <List>
                    
                    {isFavorite(hotel._id) ? (<BUTTON1> <BsStar onClick={() => removeFavorite(hotel._id)}/> </BUTTON1>) : (<BUTTON2> <BsStar onClick={() => onClickFavorite(hotel._id)}/> </BUTTON2>) }
                    {/* <img src={src} alt={hotel.phone} /> */}
                     <Link to={`/hotel/${hotel._id}`} >
                    <p> {hotel.name} </p>
                    <p> {hotel.phone} </p>
                    <p> {hotel.stars} </p>
                    </Link>
                   </List> 
                )}
                 <button onClick={NextPage}>suivant</button>
                    <button onClick={PreviousPage}>précedent</button>
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
                        />
                        )}
                    </GoogleMapReact>
                </MapContainer>
                
            </Container>
               
        );
    }
    
};

export default City;