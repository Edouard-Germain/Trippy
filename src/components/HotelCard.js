import {react,useContext,useState,useRef,useEffect} from 'react'
import { CityContext } from '../context/City';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';




const List = styled.div`
border: 1px solid lightgray;
margin : 10px 5px;
border-radius: 10px;
width: 60%;
margin-left :18%;
padding-left : 5%
`
const Text = styled.p`
    font-size: 12px;
    color: gray;
    `

const HotelCard =({selectedHotel,hotel}) =>{
    let starz = hotel.star - 1
    const ref = useRef()
    useEffect(() => {
        if (selectedHotel === hotel._id) {
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
      }, [selectedHotel])

return (
    <List ref={ref}>
        <Link to={`/hotel/${hotel._id}`} >
            <Text>{hotel.name}</Text>
        </Link>    
            <Text>{hotel.phone}</Text>
            <ReactStars count={starz} size={24} color ="#ffd700"/>
            <Text>{hotel.email}</Text>
    </List>
)
}
export default HotelCard