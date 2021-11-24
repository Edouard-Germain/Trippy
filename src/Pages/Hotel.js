import React from 'react'
import { useContext,useState, useEffect} from 'react';
import { CityContext } from '../context/City';
import Header from '../components/Header';
import {FaStar} from 'react-icons/fa/index.esm';
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";



// 1creer une route dynamique avec un parametre id 
// recuperer le parametre dans l'url
// utiliser le parametre pour fetcher le bon hotel
// le stoker dans le state hotel
// afficher l'objet hotel
const Hotel = () => {
    const [hotel, setHotel] = useState([])
    
    useEffect(() => { // => componentDidMount
        getHotel()
    }, [])

    const getHotel = () => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
        .then(response => response.json())
        .then(data => setHotel(data.result))
    }
    // console.log(hotel)
    const Banner = styled.div`
        height : 200px;
        width : 100vp ;
        background-image: url('https://www.usinenouvelle.com/mediatheque/9/1/1/000992119_896x598_c.jpg');
        background-size: cover;
        background-repeat: no-repeat;    `
    const HotelCard = styled.div `
        padding: 20px, 20px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;


    `
    const Title = styled.h1 `
        font-size : 26px;
        color: white`
    let stars = hotel.star -1
    return ( 
        <>
          <Banner>
                <Title>{hotel.name}</Title>
            </Banner>
        <div>
        <ReactStars
            count={stars}
            size={24}
            color ="#ffd700"/>
            <p> Adresse :  {hotel.adresse}</p>
            <p> Phone : {hotel.phone}</p>
            <p> Price : {hotel.price} €</p>
            <p> Country :{hotel.country}</p>
            <p>{hotel.stars}</p>
        </div>
        </>
    )   
}

export default Hotel