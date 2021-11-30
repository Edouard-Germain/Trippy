import React from 'react'
import { useContext,useState, useEffect} from 'react';
import { CityContext } from '../context/City';
import Header from '../components/Header';
import styled from 'styled-components'
import ReactStars from 'react-rating-stars-component';
import HotelMap  from '../components/HotelMap';
import Footer from '../components/Footer'
import { useParams } from 'react-router';
import Icones from '../components/Icones';
import { element } from 'prop-types';
import { Link } from 'react-router-dom';
const ButtonContainer = styled.div`
    flex-direction: row;
    gap : 2px;

    `
const Banner = styled.div`
    display : flex;
    flex-direction : column-reverse;
    height : 200px;
    width : 100vp ;
    background-image: url('https://www.hoteldeluxe.info/wp-content/uploads/2015/03/H%C3%B4tel-Normandy-Barri%C3%A8re-e1490935466848.jpg);
    background-size: cover;
    background-repeat: no-repeat;   
    padding-left : 20px `
    
const HotelCard = styled.div `
    margin-left : 100%
    padding: 20px, 20px;
    padding-bottom : 20px;
    padding-left : 10px;
    margin-left : 10%;
    margin-top : 5%;
    margin-bottom : 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    height : 65%;
    flex-direction: column;
    width : 60%;

`
const Button = styled.button`
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
        text-shadow:0px 1px 0px #219ebc;
        margin-right : 2px;
    `

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
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width : 80%
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
        <Container>
        <HotelCard>
                <ReactStars count={hotelData.star} size={24} color ="#ffd700"/>
                <Text>Adresse : {hotelData.adress}</Text>
                <Text>Phone :{hotelData.phone}</Text>
                <Text>Price : {hotelData.price}€</Text>
                <ButtonContainer>
                    <Link to={`/room/`} >
                    <Button> ROOMS</Button>
                    </Link>
                    <Button onClick ={handleFeature}>FEATURES</Button>
                </ButtonContainer>
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

        </HotelCard>
        </Container>
        <HotelMap hotelData = {hotelData}></HotelMap>
        <Footer>{Icones("wifi")}</Footer>
        
        </>
    ) } 
}  


export default Hotel

