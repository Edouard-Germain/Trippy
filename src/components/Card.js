import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const IMG = styled.img`
  height:200px;
  width: 100%;
  border-radius: 15px 15px 0px 0px
`
const Container = styled.div`
  border : 1px solid #C8C8C8;
  margin : 30px 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
`
const Title = styled.h3`
  text-align : center;`


const Card = () => {
    const [cards, setCard] = useState([])

    useEffect(() => { 
        fetch("https://trippy-konexio.herokuapp.com/api/home")
        .then(response => response.json())
        .then(result => {
          setCard(result.cities)
        })}, []);

    if (cards == null ) {
        return null
    } else {
        return (
            <div>
                {cards.map(card => 
                    <Container>
                        <IMG src={`https://trippy-konexio.herokuapp.com${card.source}`} alt={card.slug} />
                        <Title> {card.name} </Title>
                    </Container>
                )}
            </div>
        );
    }
    
}

export default Card;