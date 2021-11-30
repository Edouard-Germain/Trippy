import {react,useContext,useState,useRef,useEffect} from 'react'
import { CityContext } from '../context/City';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const List = styled.div`
border: 1px solid lightgray;
margin : 10px 5px;
border-radius: 10px
`
const HotelCard =({selectedHotel,hotel}) =>{
    const ref = useRef()
    useEffect(() => {
        if (selectedHotel === hotel) {
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
      }, [selectedHotel])

return (
    <List ref={ref}>
        <Link to={`/hotel/${hotel._id}`} >
            <p>{hotel.name}</p>
            <p>{hotel.phone}</p>
            <p>{hotel.stars}</p>
        </Link>
    </List>
)
}
export default HotelCard