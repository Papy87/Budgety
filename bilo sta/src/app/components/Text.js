import React, { Component } from 'react';
import Comments from "./Comments"

class Text extends Component {
    // constructor(props) {
    //     super(props)
    // }

    onDeleteComment = (event) => {
        event.preventDefault()
        let id = event.target.getAttribute("id")
        console.log(event);
        this.props.DeleteComments(id)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body row">
                    <p className="card-text col-10-lg">{this.props.post.text}</p>

                </div>
                <div className="comments">
                    <textarea onChange={this.props.onCommentChange} type="text" className="col-12" placeholder="Add your comment" value={this.props.comment} ></textarea>
                    <button onClick={this.props.onCreateCommentClick} className="col-2  offset-10">Send</button>
                    <h3>User comments: </h3>
                    <Comments comments={this.props.comments} onDeleteComment={this.onDeleteComment} />
                </div>

            </div>
        )
    }
}

export default Text
