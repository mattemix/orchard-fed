import React from 'react';
import './Slider1.scss'
import Slider from 'react-slick';
import Slider1Component from './Slider1Component'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props  {
    slides: any;
}

export class Slider1 extends React.Component<Props> {
    
    render() {
        let settings = {
            className: "content-slider-1",
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoTransform: false,
            centerMode: false,
            adaptiveHeight: false,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
    
        }
        return (
        <div>

            <Slider {...settings}>
                {this.props.slides && this.props.slides.map((slide: any, i: any) => {
              
                    return <Slider1Component key={i} data={slide} />
                })}
            </Slider>
        </div>
    )
            }
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <a onClick={onClick} className="slick-arrow slick-next">
            <FontAwesomeIcon icon={faChevronRight} color="red" style={{ color: "#1aafad", width: "15px", height: "25px", marginLeft: "10px" }} size="1x" />
        </a>
    )
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <a onClick={onClick} className="slick-arrow slick-prev">
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#1aafad", width: "15px", height: "25px", marginTop: "-15px", marginLeft: "12px" }} color="red" size="1x" />
        </a>
    )
}

export default Slider1