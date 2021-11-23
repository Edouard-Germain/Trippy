import React from 'react';
import styled from 'styled-components'
  
 const MaxiContainer = styled.div`
    background-color: black;
 `   
 const Container = styled.div`
    background-color: black;
    display : flex;
    justify-content : space-around;
    padding: 10px 10px;
  `
  const Title = styled.h3`
    color: white;   
    font-size : 16px;
  `
  const Text = styled.p`
  color : white ;
  font-size : 10px; 
 
  `
const Footer = () => {
    return (
        <MaxiContainer>
            <Container>
                <div>
                    <Title> Contact</Title>
                    <Text> +33183902</Text>
                    <Text> voyage@pascher.com</Text>
                </div>
                <div>
                    <Title> About Us</Title>
                        <Text>Our story</Text>
                        <Text>Meet our team</Text>
                        <Text>Join us</Text>
                </div>
                <div>
                    <Title> Technical support</Title>
                        <Text>Contact our support team</Text>
                        <Text>Faq</Text>
                </div>
           </Container>
        </MaxiContainer>
    );
};

export default Footer;