import React from 'react';
import './BlogThumbnail.scss'
import Slider from 'react-slick';
import BlogThumbnailComponent from './BlogThumbnailComponent'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props  {
    slides: any;
}

export class Slider1 extends React.Component<Props> {
    
    render() {
        let settings =  {
                className: 'content-slider',
                dots: false,
                arrows: true,
                infinite: false,
                speed: 580,
                autoplay:false,
                autoTransform:false,
                centerMode:false,
                adaptiveHeight: false,
                pauseOnHover: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 1,
                cssEase: 'linear',
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: false,
                            dots: true,
                            autoplay:false,
                        }
                    },
                     {
                        breakpoint: 1176,
                        settings: {
                            centerMode:false,
                            speed:380,
                            infinite: true,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            variableWidth: false,
                            
                        }
                    },
                 
                    {
                        breakpoint: 676,
                        settings: {
                            centerMode:false,
                            speed:380,
                            infinite: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            variableWidth: false,
                            
                        }
                    },
                    {
                        breakpoint: 380,
                        settings: {
                            centerMode:false,
                            speed:380,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: false,
                            
                        }
                    }
                ]
            }
        return (
        <div className='blog-thumbnail-container'>
            <div className='col-12'>
              <h3>ALL THE LATEST FROM AEG</h3>
            </div>
            <Slider {...settings}>
                {this.props.slides && this.props.slides.map((slide: any, i: any) => {
                    return <BlogThumbnailComponent key={i} data={slide} />
                })}
            </Slider>
        </div>
    )
            }
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <a onClick={onClick} className='slick-arrow slick-next'>
            <FontAwesomeIcon icon={faChevronRight} color='red' style={{ color: '#1aafad', width: '15px', height: '25px', marginLeft: '10px' }} size='1x' />
        </a>
    )
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <a onClick={onClick} className='slick-arrow slick-prev'>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#1aafad', width: '15px', height: '25px', marginTop: '-15px', marginLeft: '12px' }} color='red' size='1x' />
        </a>
    )
}

export default Slider1