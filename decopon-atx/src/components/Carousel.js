import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap';
import images from './json/images.json';

const MyCarousel = () => {
    const webSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const mSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const isDesktop = window.innerWidth >= 501;
    const settings = isDesktop ? webSettings : mSettings;

    return (
        <Container>
            <Row className="content">
                <div className='title'>
                    #decodenwithdecopon
                </div>
                <div className='content'>
                    <Slider {...settings}>
                        {images.map(image => (
                            <div key={image.id}>
                                <img className="sliderImage" src={image.src} alt={image.alt || 'Image'} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Row>
        </Container>
    );
};

export default MyCarousel;
