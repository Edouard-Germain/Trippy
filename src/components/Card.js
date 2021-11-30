import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import { CityContext } from '../context/City'



const IMG = styled.img`
  height:200px;
  width: 100%;
  border-radius: 15px 15px 0px 0px;

  @media (min-width: 600px) {
    height : 300px;
}
@media (min-width: 800px) {
    height : 400px;
}

@media (min-width: 1000px) {
    height : 450px;
}
`
const Container = styled.div`
  border : 1px solid #C8C8C8;
  margin : 30px 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (min-width: 600px) {
    margin : 50px 70px;
}
@media (min-width: 800px) {
    margin : 60px 80px;
}

@media (min-width: 1000px) {
    margin : 70px 90px;
}
`
const Title = styled.h3`
  text-align : center;`


const Card = () => {
    const {cities} = useContext(CityContext)
    

        
        
    if (cities == null ) {
        return null
    } else {
        return (
            <div>
                {cities.map(city => 
                    <Container >
                        
                        <Link to={`/hotels/${city.slug}`} >
                        <IMG src={`https://trippy-konexio.herokuapp.com${city.source}`} alt={city.slug} />
                        <Title> {city.name} </Title>
                        </Link>
                    </Container>
                )}
            </div>
        );
    }
    
}

export default Card;