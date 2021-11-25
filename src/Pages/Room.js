import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SlideShow from '../components/SlideShow'

const Style =styled.div`
position:relative;
overflow :hidden;
width : 300px;
padding: 3rem 0 2rem;
background-color: #90e0ef;
height: 600px;
fontSize:35px;

transition : box-shadow 0.3s;
border: 1px solid #caf0f8;
margin: 60px;
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin-left: auto;
margin-right: auto;
text-align:center;
color: white ;
 
 `
 const Div =styled.div `
 
 font-family: papyrus ;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 align-content: stretch;
 margin : 40px 20px 10px 10px;
 font-size: 30px;
 


 

 ` 


const Rooms =() => {
    const  [room, setRoom] = useState([])
    
    useEffect(() => { 
    fetch("https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539/rooms")
      .then(response => response.json()) 
      .then(result => { 
          setRoom(result.results)
          console.log(result.results) 
          console.log(room)
        }) 
  }, [])


    return (
        <Div>
           
            {room.map (rooms=> (
                <Style>    
                    <h1>Room</h1>
                    <p>  Price: {rooms.price}€</p>
                    <p>Capacity: {rooms.people}</p>
                    <p>Bathroom:{rooms.isBathroom} </p>
                    <SlideShow />
                </Style>
             
            ))} 
              
        </Div>
    );
}

export default Rooms;