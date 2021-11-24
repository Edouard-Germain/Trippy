import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CityContext } from '../context/City';
import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker';
import { useParams } from 'react-router';
import styled from 'styled-components';

const MapContainer = styled.div`
height: 100vh;
width: 100%;`

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
        
            <>
                <div> 
                {hotels.results.map(hotel =>
                   <>
                    <p> {hotel.name} </p>
                    <p> {hotel.phone} </p>
                    <p> {hotel.stars} </p>
                   </> 
                )}
                </div>
                <MapContainer>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={hotels.center}
                        defaultZoom={14}
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
                
            </>
               
        );
    }
    
};

export default City;