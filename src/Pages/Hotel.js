import React from 'react'
import { useContext,useState, useEffect} from 'react';
import { CityContext } from '../context/City';
import Header from '../components/Header';
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";
import HotelMap  from '../components/HotelMap';
import Footer from '../components/Footer'
import { useParams } from 'react-router';


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
box-shadow: 4px 2px 9px 0px #3dc21b;
background-color:#44c767;
border-radius:28px;
border:1px solid #18ab29;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:9px;
padding:5px 14px;
text-decoration:none;
text-shadow:0px 1px 0px #2f6627;`

const Title = styled.h1 `
color: #FFFFFF;
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
color: #FFFFFF;
        `

const Text = styled.p`
    font-size: 12px;
    color: gray;
    `


// 1creer une route dynamique avec un parametre id 
// recuperer le parametre dans l'url
// utiliser le parametre pour fetcher le bon hotel
// le stoker dans le state hotel
// afficher l'objet hotel
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

    console.log(hotelData)
    // const stars = hotelData.star -1
    console.log("Hotel state hotelData => ", hotelData)
    if (hotelData == null) {
        return null
    } else {
        return (
        <>
            <Banner>
                <Title>{hotelData.name}</Title>
                    {/* <Title>{hotelData.name}</Title> */}
            </Banner>   
            <HotelCard>
                <ReactStars count={hotelData.star} size={24} color ="#ffd700"/>
                <Text>Adresse : {hotelData.adress}</Text>
                <Text>Phone :{hotelData.phone}</Text>
                <Text>Price : {hotelData.price}€</Text>
                <Button onClick ={handleFeature}>FEATURES</Button>
                {featActive&& 
                    <HotelCard>
                        <Text>Douche</Text>
                        <Text>Wifi</Text>
                        <Text>PingPong</Text>
                        <Text>piscine</Text>
                        <Text>petit déjeuner</Text>
                        <Text>Cours de zumba</Text>
                    </HotelCard>}
                {/* <p> Adresse :  {hotelData.adresse}</p>
                <p> Phone : {hotelData.phone}</p>
                <p> Price : {hotelData.price} €</p>
                <p> Country :{hotelData.country}</p>
                <p>{hotelData.stars}</p> */}
            </HotelCard>
            <HotelMap hotelData = {hotelData}></HotelMap>
            <Footer></Footer>
        </>
    ) } 
}  


export default Hotel