
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
import { useState} from 'react';
import HeaderDesktop from './HeaderDesktop';
import { useMediaQuery } from 'react-responsive'


const Container = styled.div` 
liststyle: none
padding: 10px;
display: flex;
list-style: none;
justify-content: space-between;
z-index : 2;
align-items: center;
background-color: #219ebc;
position:relative;
height: 90px;
`;

const Title = styled.h1`
font-family: 'Roboto', sans-serif;`



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
// const Title2= styled.div` 
// text-align: right;
//     margin left : 100px;
//     float: left;
//     // right:align;
//     justify-content :flex-end;
// `;


const Header = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 600px)' })
    const  [show, setShow] = useState(false);
    const hamburgerClick = (boolean) => {
        console.log("Hamber",boolean)
        setShow(boolean)
    }
    console.log("state show ", show);
    return (
        <div>
            
            <Container> 
              
                
            
            <Title style={{color: 'white', padding:"0px 10px", textDecoration:"none", fontSize:"40px"}}><i>Trippy</i></Title>
            {/* <Container2>  <p>Menu</p></Container2> */}
            {/* <Title2>Menu</Title2> */}

            {isDesktop ? <HeaderDesktop /> :
            <> 
                {!show ? 
            
                    <GiHamburgerMenu  style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"35px"}}onClick={() => hamburgerClick(true)}></GiHamburgerMenu> 
                    : (
                        <Liste className="navbar">
                            
                            <Link to="/" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"20px"}}>Home</Link>
                            <Link to="/favorite" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"20px"}}>Favoris</Link>
                            <MdCancel style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"30px"}}    onClick={() => hamburgerClick(false)}/>
    
                            {/* <img src="https://tinyurl.com/9rnwf6vb" alt="image"/> */}
           
                        </Liste>
                        
                    )

                }
            </>
            }
            
              </Container> 
         </div>
    );
};

export default Header;