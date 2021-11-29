import styled from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa'

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


const Marker = (props) => {

  
  return (
   
      <>
     
        <MarkerContainer>
        <Price> {props.price}€ </Price>
         <FaMapMarkerAlt style={{ width: '30px', height: '30px', color: "red", position: "absolute", bottom: '100%', left: '-20px' }} />
        </MarkerContainer>
     </>
  )
}

export default Marker