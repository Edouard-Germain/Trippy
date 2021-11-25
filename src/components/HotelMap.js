import GoogleMapReact from 'google-map-react'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const MapContainer = styled.div`
height: 65vh;
width: 100%;
`
const HotelMap =({hotel}) =>{
    
    return (
    <MapContainer>
        <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={{
                            lat : hotel.location.lat,                            
                            lng : hotel.location.lon}}
                        defaultZoom={12}
        ></GoogleMapReact>
    </MapContainer>
    )
}
export default HotelMap