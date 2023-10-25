import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    data: any;
}


export class BlogThumbnailComponent extends React.Component<Props> {
    render() {
        return (
            <>
                <div className='slide-item slider' >
                    <div className='blog-thumbnail'>
                        <img className='img-fluid' alt={this.props.data.alt} src={this.props.data.image} />
                        <div className='col-lg-12 text-area'>
                            <h5>{this.props.data.title}</h5>
                            <p>{this.props.data.content}</p>
                            <button className="btn" onClick={() => console.log(this.props.data.link)}>READ MORE</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default BlogThumbnailComponent;