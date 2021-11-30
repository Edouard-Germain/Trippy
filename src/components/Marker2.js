import Marker from './Marker';
import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa'


const MarkerContainer = styled.div`
width: 400px;
height: 400px;
position: relative;
`
const Name = styled.div`
    border : 1px solid #dee2e6;
    background-color : #dee2e6;
    text-align: center;
    border-radius: 20px;
    font-weight: 600px;
    position : absolute;
    left : -21px;
    padding: 5px
    height:10px;
`

const Adress=styled.div`
border : 1px solid #dee2e6;
background-color : #dee2e6;
text-align: center;
border-radius: 20px;
font-weight: 800px;
height:10px;
position : absolute;
left : -21px;
padding: 5px

`
.NameStyle =styled.div`
border : 1px solid #dee2e6;
background-color : #dee2e6;
text-align: center;
border-radius: 20px;
font-weight: 600px;
// height:10px;

`


function Marker2(props) {
    return (
        <div>
           <MarkerContainer>
              <div className="NameStyle">
                 <Name>{props.name}</Name>   
              </div>
              <div className="Adresse">
                  <Adress>{props.address}</Adress>
              </div>      
                  
            <FaMapMarkerAlt style={{ width: '30px', height: '30px', color: "red", position: "absolute", bottom: '100%', left: '-20px' }} />
            </MarkerContainer> 
        </div>
    );
}
export default Marker2;