import Comments from "./Comments"
import React, { Component } from 'react';

class Image extends Component {
    // constructor(props) {
    //     super(props)
    // }

    onDeleteComment = (event) => {
        event.preventDefault()
        let id = event.target.getAttribute("id")
        this.props.DeleteComments(id)
    }
    render() {
        return (
            <div className="card row">
                <img className="col-12" src={this.props.post.imageUrl} alt="userAvatar" />
                <div className="card-body row">
                    <div className="comments">
                        <textarea onChange={this.props.onCommentChange} type="text" className="col-12" placeholder="Add your comment" value={this.props.comment} ></textarea>
                        <button onClick={this.props.onCreateCommentClick} className="col-2 offset-5">Send</button>
                        <Comments comments={this.props.comments} onDeleteComment={this.onDeleteComment} />
                    </div>
                </div>
            </div >
        )
    }
}

export default Image

