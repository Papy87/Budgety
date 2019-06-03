import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { MDBBtn } from "mdbreact";

class ImageFeed extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="card row"  > <Link to={`/singlepost/${this.props.post.id}`} key={this.props.post.id}>
                <img className="col-12 postImg" src={this.props.post.imgUrl} alt="image" />
                <div className="card-body row">
                    <p className="col-6">Image post</p>
                    <p className="col-6 comment">{this.props.post.comments.length} comments</p>

                </div>
            </Link>

                <button type="button" className="btn btn-primary btn-sm col-2" id={this.props.post.id} onClick={this.props.onDeleteButtonClick}>delete</button>
            </div >
        )
    }
}

export default ImageFeed
