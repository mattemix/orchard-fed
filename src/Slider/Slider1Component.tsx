import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    data: any;
}

interface State {
    show: boolean;
    imageModal: string;
    altModal: string;
}
export class Slider1Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show: false,
            imageModal: '',
            altModal: ''
        };
    }

    showImageModal(img: string, alt: string) {
        this.setState({ show: true, imageModal: img, altModal: alt });
    }

    render() {
        return (
            <>
                <div className='slide-item slider' >
                    <div className='d-flex align-items-center flex-column flex-lg-row flex-xl-row '>
                        <div className='col-lg-8'>
                            <div className='row g-0'>
                                <div className='col-6'>
                                    <img data-animation-in='fadeInRight' className='fadeInRight slider-1-img img-fluid' alt={this.props.data.image1.alt} onClick={() => this.showImageModal(this.props.data.image1.image2x, this.props.data.image1.alt)} src={this.props.data.image1.image} />
                                </div>
                                <div className='col-6'>
                                    <img data-animation-in='fadeInUp' className='fadeInUp slider-1-img img-fluid' alt={this.props.data.image2.alt} onClick={() => this.showImageModal(this.props.data.image2.image2x, this.props.data.image2.alt)} src={this.props.data.image2.image} />
                                    <img data-animation-in='fadeInDown' className='fadeInDown slider-1-img img-fluid' alt={this.props.data.image3.alt} onClick={() => this.showImageModal(this.props.data.image3.image2x, this.props.data.image3.alt)} src={this.props.data.image3.image} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 text-area fadeInLeft' data-animation-in='fadeInLeft'>
                            <h4>{this.props.data.content && this.props.data.content.title}</h4>
                            <p>{this.props.data.content && this.props.data.content.content1}</p>
                            <h5>{this.props.data.content && this.props.data.content.title2}</h5>
                            <p>{this.props.data.content && this.props.data.content.content2}</p>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={() => this.setState({ show: false, altModal: '', imageModal: '' })} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton>
                        {this.state.altModal}
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.state.imageModal} alt={this.state.altModal} className='img-fluid' />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default Slider1Component;