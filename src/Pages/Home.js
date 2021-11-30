import Footer from '../components/Footer'
import Card from '../components/Card'
import Header from '../components/Header'
import SlideShow from '../components/SlideShow'
import styled from 'styled-components'


const Slide1= styled.div`

duration:1000;
transitionDuration:500;
infinitie: true ;
indicators: true;
arrows:true ;
widht:100%;
hight:100%
margin:auto; 
text-align:center;


`;







const Home = () => {

    return (
        <>
            <Header/>
            {/* <div className="Container "> */}
                <Slide1>
                    <SlideShow/> 
                 </Slide1>
                    <Card/> 
                    <Footer/>
        </>
    )
}

export default Home
