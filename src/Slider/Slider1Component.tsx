import React from 'react';

interface Props {
    data: any;
}

export class Slider1Component extends React.Component<Props> {

    render() {
        return (
            <div className={'slide-item'} >
                <div className='d-flex align-items-center flex-column flex-lg-row flex-xl-row '>
                    <div className='col-lg-8'>
                        <div className='row g-0'>
                            <div className='col-6'>
                                <img data-animation-in="fadeInLeft" className="fadeInLeft slider-1-img img-fluid" alt={this.props.data.image1.alt} data-delay-in="2.2" src={this.props.data.image1.image} />
                            </div>
                            <div className='col-6'>
                                <img data-animation-in="fadeInUp" data-delay-in=".3" className="fadeInLeft slider-1-img img-fluid" alt={this.props.data.image2.alt} src={this.props.data.image2.image} />
                                <img data-animation-in="fadeInUp" data-delay-in=".3" className="fadeInLeft slider-1-img img-fluid" alt={this.props.data.image3.alt} src={this.props.data.image3.image} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 text-area'>
                        <h3>{this.props.data.content && this.props.data.content.title}</h3>
                        <p>{this.props.data.content && this.props.data.content.content1}</p>
                        <h4>{this.props.data.content && this.props.data.content.title2}</h4>
                        <p>{this.props.data.content && this.props.data.content.content2}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider1Component;