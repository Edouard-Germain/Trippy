import GoogleMapReact from 'google-map-react'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Marker from './Marker';
import Marker2 from './Marker2';
const MapContainer = styled.div`
    height: 65vh;
    width: 100%;
`
const HotelMap =({hotelData}) =>{
    console.log("Hotelmap props hotel => ", hotelData)
    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat : hotelData.location.lat,                            
                    lng : hotelData.location.lon}}
                defaultZoom={12}
            >   
            </GoogleMapReact>
        </MapContainer>
    )
}
export default HotelMap