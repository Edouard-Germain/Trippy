import GoogleMapReact from 'google-map-react'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Marker from './Marker';
import Marker2 from './Marker2';
const MapContainer = styled.div`
height: 65vh;
width: 100%;
`

const HotelMap =({hotel}) =>{
    console.log("le name ne s'affiche pas",hotel.name)
    
    return (
    <MapContainer>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{
                lat : hotel.location.lat,                            
                lng : hotel.location.lon
            }}
            defaultZoom={12}
        >
            <Marker2 
                   
                    lat={hotel.location.lat}
                    lng={hotel.location.lon}  
                    name={hotel.name} 
                    address={hotel.address}
            />   
        </GoogleMapReact>
    </MapContainer>
    )
}
export default HotelMap