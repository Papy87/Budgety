import React, { Component } from 'react';
import { Link } from "react-router-dom"
class ImageFeed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card row" > <Link to={`/singlepost/${this.props.post.id}`} key={this.props.post.id} >
                <iframe className="col-12" width="560" height="315" src={this.props.post.videoUrl} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <div className="card-body row">
                    <p className="col-6">Video post</p>
                    <p className="col-6 comment">{this.props.post.comments.length} comments</p>
                </div>
            </Link>
                <button type="button" className="btn btn-primary btn-sm col-2" id={this.props.post.id} onClick={this.props.onDeleteButtonClick}>delete</button>
            </div>
        )
    }
}
export default ImageFeed
