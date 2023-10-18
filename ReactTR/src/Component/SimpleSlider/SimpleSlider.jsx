import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from "../../assets/image/slider/chevron_left.svg";
import nextArrow from "../../assets/image/slider/chevron_right.svg";

const SimpleSlider = (props) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function SamplePrevArrow(props) {
        const {className,  onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><img src={prevArrow} alt=""/></div>
        );
    }

    function SampleNextArrow(props) {
        const {className, onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><img src={nextArrow} alt=""/></div>
        );
    }

    return (
            <Slider {...settings}>
                {props.children}
            </Slider>
    );
};

export default SimpleSlider;
