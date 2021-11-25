import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CityContext } from '../context/City';
import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker';
import { useParams } from 'react-router';
import styled from 'styled-components';
// import arrayImage from '../images.json'
import {BsStar} from 'react-icons/bs'
import Favorites from './Favorites';

const MapContainer = styled.div`
height: 50vh;
width: 90%;`

const ListContainer = styled.div`
height: 50vh;
width: 90%;
overflow: scroll;
`
const List = styled.div`
border: 1px solid lightgray;
margin : 10px 5px;
border-radius: 10px
`
const Container = styled.div`
display : block
`
const BUTTON2 = styled.button`
background-color : white;
color : #ffbe0b`

const BUTTON1 = styled.button`
background-color : #ffbe0b;
color : white`

const City = () => {
    const {city} = useParams()
    const [favorite, setFavorite] = useState(false)
    const [hotels, setHotels] = useState(null)
    // const [favoritePage, setFavoritePage] = useState([])
    const [selectedBar, setSelectedBar] = useState({})

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
      .then(response => response.json())
      .then(data => setHotels(data))
    },[])

   const addtoFavorite = (id, index) => {
        
        console.log("id", id);
        console.log("index", index);
        console.log("hotels.results",hotels.results);
        // var includ = hotels.results[index]._id.includes(id)
        // console.log("includ", includ)
        if (hotels.results[index]._id === id) {
            setFavorite(true)
        }

    }

    const removetoFavorite = (id) => {
        setFavorite(false)
    }

    if(hotels == null) {
        return null
    } else {
        
        return (
        
            <Container>
                
                <ListContainer> 
                {hotels.results.map((hotel, index) => 
    
                
                
                   <List>
                    
                    {favorite ? (<BUTTON1> <BsStar onClick={() => removetoFavorite(hotel._id, index)}/> </BUTTON1>) : (<BUTTON2> <BsStar onClick={()=>addtoFavorite(hotel._id, index)}/> </BUTTON2>) }
                    {/* <img src={src} alt={hotel.phone} /> */}
                    <p> {hotel.name} </p>
                    <p> {hotel.phone} </p>
                    <p> {hotel.stars} </p>
                   </List> 
                )}
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