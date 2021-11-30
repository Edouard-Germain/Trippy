import styled from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { CityContext } from "../context/City"
import { useState, useContext } from "react"

const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`
const Price = styled.div`
  border : 1px solid #dee2e6;
  background-color : #dee2e6;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  position : absolute;
  left : -21px;
  padding: 5px
`
const Box = styled.div`
  background-color : white; 
  border : 1px solid teal; 
  border-radius : 15px; 
  padding: 10px; 
  bottom : 100%;
  width : 250px;
  left : -125px;
  z-index : 2;
`


const Marker = (props) => {
  const [infoWindowVisible, setInfoWindowVisible] = useState(false)
  const { setSelectedHotel } = useContext(CityContext)

  return (
      <>
        <MarkerContainer>
        <Price> {props.price}€ </Price>
        <FaMapMarkerAlt onMouseEnter={() => {
          setInfoWindowVisible(true)
          setSelectedHotel(props.hotel)
          ;
        }}
        onMouseLeave={() => {
          setInfoWindowVisible(false)
          setSelectedHotel({})
        }} 
        
        style={{ 
          width: '30px', 
          height: '30px', 
          color: "red", 
          position: "absolute", 
          bottom: '100%',
          left: '-20px' }} />
           
          {infoWindowVisible ? (
           <Box>
             <h3> {props.name} </h3>
             <h4>{props.price}€</h4>
           </Box>
            
          ) : (
          "")}
        </MarkerContainer>
     </>
  )
}

export default Marker