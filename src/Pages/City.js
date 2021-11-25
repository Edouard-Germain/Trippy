import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CityContext } from '../context/City';
import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
// import arrayImage from '../images.json'
import {BsStar} from 'react-icons/bs'

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
const BUTTON2 = styled.button`
background-color : white;
color : #ffbe0b`

const BUTTON1 = styled.button`
background-color : #ffbe0b;
color : white`

const City = () => {
    const {city} = useParams()
    const [favorite, setFavorite] = useState(false)
    const  [page,setPage] = useState(1)
    const [hotels, setHotels] = useState(null)

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`)
      .then(response => response.json())
      .then(data => setHotels(data))
    },[])

   const AddtoFavorite = () => {
        if (favorite) {
            setFavorite (false)
        } else {
            setFavorite(true)
        }
    }
    const NextPage = () => {
        if (page < 4){
            setPage(page +1 )
        }
    }
    const PreviousPage = () => {
        if (page >=1){
            setPage(page-1)
        }
    }

    console.log("page",page)

    if(hotels == null) {
        return null
    } else {
        console.log(hotels)
        return (
        
            <Container>
                <ListContainer> 
                {hotels.results.map((hotel) => 
                    // var src = hotel.pictures.find(picture => arrayImage.includes(picture))
                    // if (src) {
                    //     src = 'https://trippy-konexio.herokuapp.com' + src
                    // }
                    // else { src = 'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=' }
                
                    
                   <List>
                    {favorite ? (<BUTTON1> <BsStar onClick={AddtoFavorite}/> </BUTTON1>) : (<BUTTON2> <BsStar onClick={AddtoFavorite}/> </BUTTON2>) }
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
                        />
                        )}
                    </GoogleMapReact>
                </MapContainer>
                
            </Container>
               
        );
    }
    
};

export default City;