import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CityContext } from '../context/City';
import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker';
import { useParams } from 'react-router';
import styled from 'styled-components';

const MapContainer = styled.div`
height: 100vh;
width: 70%;`

const ListContainer = styled.div`
height: 100vh
width: 30%;
overflow: scroll;
`
const List = styled.div`
border: 1px solid lightgray;
margin : 10px 5px;
border-radius: 10px
`
const Container = styled.div`
display : flex
`

const City = () => {
    const {city} = useParams()

    const [hotels, setHotels] = useState(null)

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
      .then(response => response.json())
      .then(data => setHotels(data))
    },[])

    if(hotels == null) {
        return null
    } else {
        console.log(hotels)
        return (
        
            <Container>
                <ListContainer> 
                {hotels.results.map(hotel =>
                   <List>
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
                        />
                        )}
                    </GoogleMapReact>
                </MapContainer>
                
            </Container>
               
        );
    }
    
};

export default City;