import React, { Component } from 'react';
import Comments from "./Comments"

class Video extends Component {
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
            <div className="card row"  >
                <iframe title="youtubeVideo" width="560" height="315" src={this.props.post.videoUrl} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                <div className="card-body row">
                    <div className="comments">
                        <form>
                            <textarea onChange={this.props.onCommentChange} type="text" className="col-12" placeholder="Add your comment" value={this.props.comment}></textarea>
                            <button type="submit" onClick={this.props.onCreateCommentClick} className="col-2  offset-5">Send</button>
                        </form>
                        <Comments comments={this.props.comments} onDeleteComment={this.onDeleteComment} />
                    </div>

                </div>
            </div>
        )
    }
}
export default Video


