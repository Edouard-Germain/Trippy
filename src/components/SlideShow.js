
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';



const FadeContainer = styled.div`
width: 100%;
height: calc(100vh - 90px);
overflow: hidden
`



const SlideShow = () => {
  return (
    <div className="slide-container">
     <FadeContainer  >  
  
      <Fade arrows={false} >
          <div className="each-fade "> 
          <img style={{width:"100%",height:"100%"}} src="https://www.yonder.fr/sites/default/files/styles/lg-insert/public/contenu/destinations/Moorea%20polynesie%C2%A9%20Gr%C3%A9goire%20Le%20Bacon%20Tahiti%20Nui%20Helicopters_0.jpg?itok=SZMcCh6M"/>
          </div> 
         
          {/* <div className="each-fade "> 
            <img style={{width:"100%",height:"1100px"}}src={""}/>
          </div>  */}
          
          <div className="each-fade "> 
            {/* <div style={{'backgroundImage': `url("https://a.cdn-hotels.com/gdcs/production177/d85/60b28a39-d112-44a5-b21a-01a74c665446.jpg?impolicy=fcrop&w=1600&h=1066&q=medium")`}}></div> */}
             <img style={{width:"100%",height:"100%"}}src={"https://a.cdn-hotels.com/gdcs/production177/d85/60b28a39-d112-44a5-b21a-01a74c665446.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"}/>
          </div> 
          
          <div className="each-fade "> 
          {/* <div style={{'backgroundImage': `url("https://media-cdn.tripadvisor.com/media/photo-s/1c/9a/64/27/hotel-plaza-athenee-haute.jpg")`}}></div> */}

             <img style={{width:"100%",height:"100%"}}src={"https://media-cdn.tripadvisor.com/media/photo-s/1c/9a/64/27/hotel-plaza-athenee-haute.jpg"}/>
          
          </div> 

          <div className="each-fade "> 
          {/* <div style={{'backgroundImage': `url("https://www.astucesdefilles.com/wp-content/uploads/2015/10/d.jpg")`}}></div> */}

          <img style={{width:"100%",height:"100%"}}src={"https://www.astucesdefilles.com/wp-content/uploads/2015/10/d.jpg"}/>
      
          </div> 
          
          <div className="each-fade "> 
          {/* <div style={{'backgroundImage': `url("https://media-s.hubside.com/0c786663-d0e2-4fc1-8130-247e9861686d%2Fmedia%2F4%2F3%2Fe%2F43ed42f4-8e45-4035-92b7-778d02ac27aa")`}}></div> */}

              <img style={{width:"100%",height:"100%"}}src={"https://media-s.hubside.com/0c786663-d0e2-4fc1-8130-247e9861686d%2Fmedia%2F4%2F3%2Fe%2F43ed42f4-8e45-4035-92b7-778d02ac27aa"}/>
          
          </div> 
          

          
    </Fade>
    </FadeContainer>   
    </div>
      //  responsive max ou min hight et max ou min widht
          
          
       
   
  )
}

export default SlideShow ;
