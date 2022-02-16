import React, { useEffect } from 'react';
import {Carousel,Container} from 'react-bootstrap' 
import corosel2 from '../image/second-corosel.jpg'
import AdminHome_1 from '../image/AdminHome_1.jpg'
import AdminHome_2 from '../image/AdminHome_2.jpg'
import AdminEveningWalk from '../image/AdminEveningWalk.jpg'
import Content from './Content'
import '../../css/home/description.css'
import {Description} from './Description.js'
import NavigationBar from '../navbar/navbar.js';
import {Footer} from './Footer'
import '../../css/home/footer.css'

function Home(props) {

   
    return (
        <>
        <NavigationBar/>
           <Container style={{marginTop: 115}}>
           <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={AdminHome_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Self Help</h1>
                        <p>We are here to help you </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={AdminHome_2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Self Help</h1>
                        <p>We are here to help you </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={AdminEveningWalk}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Service You love</h1>
                        <p>Always Eager to help whenever you need</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={corosel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Service You love</h1>
                        <p>Always Eager to help whenever you need</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
           </Container>
           <Content/>
           <Description/>
           <Footer/>
        </>
    );
}

export default Home;