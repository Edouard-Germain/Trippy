import React from 'react'
import { useContext,useState, useEffect} from 'react';
import { CityContext } from '../context/City';
import Header from '../components/Header';
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";
import HotelMap  from '../components/HotelMap';
import Footer from '../components/Footer'
import { useParams } from 'react-router';
import Icones from '../components/Icones';
import { element } from 'prop-types';


const Banner = styled.div`
    display : flex;
    flex-direction : column-reverse;
    height : 200px;
    width : 100vp ;
    background-image: url('https://www.usinenouvelle.com/mediatheque/9/1/1/000992119_896x598_c.jpg');
    background-size: cover;
    background-repeat: no-repeat;   
    padding-left : 20px `
    
const HotelCard = styled.div `
    padding: 20px, 20px;
    padding-bottom : 20px;
    padding-left : 10px;
    margin-left : 10%;
    margin-top : 5%;
    margin-bottom : 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    height : 45%;
    width : 75%;


`
const Button = styled.button`
    box-shadow: 4px 2px 9px 0px #219ebc;
    background-color:#219ebc;
    border-radius:28px;
    border:1px solid #219ebc;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:9px;
    padding:5px 14px;
    text-decoration:none;
    text-shadow:0px 1px 0px #219ebc;`

const Title = styled.h1 `
    color: #FFFFFF;
    text-shadow: 2px 2px 0px #219ebc, 5px 4px 0px rgba(0,0,0,0.15);
    font-size: 28px;
        `

const Text = styled.p`
    font-size: 12px;
    color: gray;
    `



const IconAlign = styled.ul`
    padding: 5px;
    
`
const Comm = styled.div`
display: flex;
flex-direction:row;
flex-wrap: wrap;
align-items: center;
`
const IconItem = styled.div`
    
    
`
const Hotel = () => {
    const {id} = useParams()
    const [hotelData, sethotelData] = useState(null)
    const [featActive, setFeatActive]= useState(false)
    
    useEffect(() => { // => componentDidMount
        getHotel()
    }, [])

    console.log("hotel",id)

    const getHotel = () => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
        .then(response => response.json())
        .then(data => sethotelData(data.result))
    }

    const handleFeature = ()=> {
        if (featActive=== false){
        setFeatActive(true)
        }else if (featActive === true){
            setFeatActive(false)
        }
    }

    // console.log(hotel)
   

    // const stars = hotelData.star -1
    console.log(hotelData)
    if (hotelData == null){
        return null}
        else {
            return (
     
        <>
        <Banner>
                <Title>{hotelData.name}</Title>
                {/* <Title>{hotel.name}</Title> */}
        </Banner>
        <HotelCard>
            <ReactStars count={hotelData.star} size={24} color ="#ffd700"/>
            <Text>Adresse : {hotelData.adress}</Text>
            <Text>Phone :{hotelData.phone}</Text>
            <Text>Price : {hotelData.price}€</Text>
            <Button onClick ={handleFeature}>FEATURES</Button>
            {featActive&& 
        <HotelCard>
                {hotelData.commodities.filter(function (ele, pos) {
                                return hotelData.commodities.indexOf(ele) == pos;
                            }).map(element => (
                                <Comm>
                                    <IconAlign>
                                        <Icones comodity={element}></Icones>
                                    </IconAlign>
                                    <IconItem>
                                        <p>{element}</p>
                                    </IconItem>
                                </Comm>
                            ))}
            </HotelCard>}
            {/* <p> Adresse :  {hotel.adresse}</p>
            <p> Phone : {hotel.phone}</p>
            <p> Price : {hotel.price} €</p>
            <p> Country :{hotel.country}</p>
            <p>{hotel.stars}</p> */}
        </HotelCard>
        <HotelMap hotelData = {hotelData}></HotelMap>
        <Footer>{Icones("wifi")}</Footer>
        
        </>
    ) } 
}  


export default Hotel

{/* <HotelCard>
                    <Text> 
                        {hotel.commodities.filter(function(ele , pos){
                            return hotel.commodities.indexOf(ele) == pos;
                        }).map(element=> (<p>{element}</p>))} 
                    </Text>
                </HotelCard>} */}