import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div` 

display: flex;

`;



const  Liste = styled.div`
display: flex;

`



const HeaderDesktop = () => {
  
    return (
        <div>
            
        <Container> 
              
                
            
            
                    <Liste className="navbar">
                        
                        <Link to="/" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"20px"}}>Home</Link>
                        <Link to="/favorite" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"20px"}}>Favoris</Link>
       
                    </Liste>
                    
                
        </Container> 
        </div>
    );
};

export default HeaderDesktop;