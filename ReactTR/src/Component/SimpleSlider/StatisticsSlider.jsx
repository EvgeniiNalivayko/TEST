import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import classes from './SliderStyles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from "../../assets/image/slider/chevron_left.svg";
import nextArrow from "../../assets/image/slider/chevron_right.svg";

const StatisticsSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(4);
            }
        })
        return () => {
            window.removeEventListener('resize', () => {});
        };
    }, []);
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
    };

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block",  }}
                onClick={onClick}
            ><img src={prevArrow} alt=""/></div>
        );
    }

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block",  }}
                onClick={onClick}
            ><img src={nextArrow} alt=""/></div>
        );
    }

    return (
        <div className={classes.sliderContainer}>
            <Slider {...settings}>
                <div className={classes.sliderItem}>
                    <h3>+250</h3>
                    <p>new members</p>
                    <span>every month</span>
                </div>
                <div className={classes.sliderItem}>
                    <h3>17+</h3>
                    <p>years</p>
                    <span>in dating business!</span>
                </div>
                <div className={classes.sliderItem}>
                    <h3>100%</h3>
                    <p>verified members</p>
                    <span>with our Anti-scam policy!</span>
                </div>
                <div className={classes.sliderItem}>
                    <h3>Free</h3>
                    <p>letters and chat</p>
                    <span>let ladies know more about you</span>
                </div>
            </Slider>
        </div>
    );
};

export default StatisticsSlider;
