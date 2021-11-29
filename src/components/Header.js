
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
import { useState} from 'react';

const Container = styled.div` 
liststyle: none
padding: 10px;
display: flex;
flex-direction: row;
list-style: none;
justify-content: space-between;
align-items: center;
background-color: #219ebc;
position:relative;

`;

const Title = styled.h1`
font-family: 'Alegreya Sans SC', sans-serif;`



const  Liste = styled.div`
display: flex;
flex-direction: row;
background-color: #219ebc;

flex-direction:	
column ;
position:absolute;
right : 0;
bottom:-200px;
width: 100%;
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
            <Title style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"40px"}}>Home</Title>
            {!show ? 
                <GiHamburgerMenu style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"35px"}}onClick={() => hamburgerClick(true)} />
                : (
                    <Liste className="navbar">
                        <Link to="/" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>Home</Link>
                        <Link to="/hotel" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"15px"}}>Hôtel</Link>                     
                        <Link to="/City" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"15px"}}>City</Link>
                        <Link to="/room" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"15px"}}>Rooms</Link>
                        <Link to="/Favoris" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"15px"}}>Favoris</Link>
                        <MdCancel style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"30px"}}    onClick={() => hamburgerClick(false)}/>

                        {/* <img src="https://tinyurl.com/9rnwf6vb" alt="image"/> */}
       
                    </Liste>
                    
                )
            }  </Container> 
         </div>
    );
};

export default Header;