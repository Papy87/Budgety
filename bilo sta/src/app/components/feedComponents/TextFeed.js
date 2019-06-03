import React, { Component } from 'react';
import { Link } from "react-router-dom"
class TextFeed extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card" > <Link to={`/singlepost/${this.props.post.id}`} key={this.props.post.id}>
                <div className="card-body row">
                    <p className="card-text col-12 textFeed">{this.props.post.text}</p>
                    <p className="col-6">Text Post</p>
                    <p className="col-6 comment">{this.props.post.comments.length} comments</p>
                </div>

            </Link>
                <button type="button" className="btn btn-primary btn-sm col-2" id={this.props.post.id} onClick={this.props.onDeleteButtonClick}>delete</button>
            </div>
        )
    }
}
export default TextFeed