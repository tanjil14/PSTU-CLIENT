import React from 'react';
import { CarouselItem,Carousel, Container } from 'react-bootstrap';
import "./Slider.css"
import img1 from "../../images/16487514_1346979582039249_7886773494461505188_o11.jpg"
import img2 from "../../images/20882873_1596813987016907_6153317557885326115_n.jpg"
const Slider = () => {
    return (
        <section className="hero">
            <Container>
                  <Carousel>
                      <CarouselItem interval={1000}>
                       <img className="slide" src={img1} alt="" />
                      </CarouselItem>
                      <CarouselItem interval={1000}>
                       <img className="slide" src={img2} alt="" />
                      </CarouselItem>
                      <CarouselItem interval={1000}>
                       <img className="slide" src={img1} alt="" />
                      </CarouselItem>
                  </Carousel>
            </Container>
        </section>
    );
};

export default Slider;