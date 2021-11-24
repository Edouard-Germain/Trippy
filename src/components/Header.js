
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {GiHamburgerMenu,GiReturnArrow} from 'react-icons/gi'
import { useState} from 'react';

const Container = styled.div` 
liststyle: none
margin: 10px;
padding: 10px;
display: flex;
flex-direction: row;
list-style: none;
justify-content: space-between;
align-items: center;
background-color: #219ebc;
`;

const Title = styled.h1`
font-family: 'Alegreya Sans SC', sans-serif;`



const  Liste = styled.div`
display: flex;
flex-direction: row;
background-color: #219ebc;
`


const Header = () => {
  
    const  [show, setShow] = useState(false);
    const hamburgerClick = (boolean) => {
        console.log("Hamber",boolean)
        setShow(boolean)
    }
    console.log("state show ", show);
    return (
        <div>
            <Container>  
            <Title>Home</Title>
            {!show ? 
                <GiHamburgerMenu onClick={() => hamburgerClick(true)} />
                : (
                    <Liste className="navbar">
                        <Link to="/" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>Home</Link>
                        <Link to="/Hôtel" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>Hôtel</Link>                     
                        <Link to="/City" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>City</Link>
                        <Link to="/Rooms" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>Rooms</Link>
                        <Link to="/Favoris" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>Favoris</Link>
                        <GiReturnArrow   onClick={() => hamburgerClick(false)}/>

                        <img src="https://tinyurl.com/9rnwf6vb" alt="image"/>
       
                    </Liste>
                    
                )
            }  </Container> 
         </div>
    );
};

export default Header;