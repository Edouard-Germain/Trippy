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

const MapContainer = styled.div`
height: 50vh;
width: 100%;`

const ListContainer = styled.div`
height: 50vh;
width: 100%;
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
    const  [page,setPage] = useState(1)
    const [hotels, setHotels] = useState(null)
    // const [favoritePage, setFavoritePage] = useState([])
    const [selectedBar, setSelectedBar] = useState({})

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`)
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

const onClickFavorite = (id) => {
    if (!localStorage.getItem("favorites")) {
        let newArray = []
        newArray.push(id)
        localStorage.setItem("favorites", JSON.stringify(newArray))
    } else {
        let favorites = JSON.parse(localStorage.getItem("favorites"))
        favorites.push(id)
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    
}



    const removetoFavorite = (id) => {
        setFavorite(false)
    }

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

    console.log("page",page)

    if(hotels == null) {
        return null
    } else {
        
        return (
        
            <Container>
                
                <ListContainer> 
                {hotels.results.map((hotel, index) => 
    
                
                    
                   <List>
                    
                    {favorite ? (<BUTTON1> <BsStar onClick={() => removetoFavorite(hotel._id, index)}/> </BUTTON1>) : (<BUTTON2> <BsStar onClick={()=>{addtoFavorite(hotel._id, index); onClickFavorite(hotel._id)}}/> </BUTTON2>) }
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