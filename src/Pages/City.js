import React, { useEffect, useState, useRef } from 'react';
import { useContext } from 'react';
import { CityContext } from '../context/City';
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
import Footer from '../components/Footer'

const MapContainer = styled.div`
height: 50vh;
width: 100%;
@media (min-width: 800px) {
    height: 100vh;
}`

const Button =styled.button`
    background: #219ebc;
    border:1px solid #219ebc;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    text-decoration:none;
    text-shadow:0px 1px 0px #219ebc;
    border-radius: 50%;
    margin : 2px;

`
const Header = styled.div`
    background-color : #219ebc;
    height : 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const Title = styled.h2`
    font-size: 28px;
    color: white;
    text-transform: uppercase;
`

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
    console.log(selectedHotel)
    // const  Hotel = ({hotel})
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`)
      .then(response => response.json())
      .then(data => setHotels(data))
    },[page,city])

    // useEffect(() => {
    //     if (selectedHotel === id) {
    //       ref.current.scrollIntoView({ behavior: "smooth" })
    //     }
    //   }, [selectedHotel])
   



    const choosePage = (num) =>{
            setPage(num)
    }

    if(hotels == null) {
        return null
    } else {
        
        return (
        <>
                <Header>
                    <Title>{city}</Title>
                </Header>
            <Container>
                <ListContainer> 
                {hotels.results.map((hotel, index) => 
                <> 
                    <HotelCard hotel={hotel} selectedHotel={selectedHotel}>

                    </HotelCard>

                    <List  id={hotel}
                   selectedHotel={selectedHotel}>
                    {/* <img src={src} alt={hotel.phone} /> */}

                   {/* {isFavorite(hotel._id) ? (<BUTTON1> <BsStar onClick={() => removeFavorite(hotel._id)}/> </BUTTON1>) : (<BUTTON2> <BsStar onClick={() => onClickFavorite(hotel._id)}/> </BUTTON2>) } */}
                     {/* <Link to={`/hotel/${hotel._id}`} >
                    <p> {hotel.name} </p>
                    <p> {hotel.phone} </p>
                    <p> {hotel.stars} </p>
                    </Link> */}
                   </List> 
                </>
                    
                
                )}
                    <Button onClick={() => {choosePage(1)}}>1</Button>
                    <Button onClick={() => {choosePage(2)}}>2</Button>
                    <Button onClick ={() => {choosePage(3)}}>3</Button>
                    <Button onClick ={()=>{choosePage(4)}}>4</Button>
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
                            hotel = {hotel._id}
                        />
                        )}
                    </GoogleMapReact>
                </MapContainer>
                
            </Container>
            <Footer></Footer>
        </>       
        );
    }
    
};

export default City;