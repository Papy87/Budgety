import React, { Component } from 'react';
import { FetchSinglePosts, fetchComments } from '../../service/FetchSinglePost';
import { Comments } from '../../service/Comments';
import { deleteComments } from '../../service/deletePosts'
import Video from "./Video"
import Image from "./Image"
import Text from "./Text"

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: [],
            comment: "",
        };
    }

    componentDidMount() {
        const postId = this.props.match.params.id;

        this.loadPost(postId);
        this.loadComments(postId)
    }

    loadPost = () => {
        let postId = this.props.match.params.id
        FetchSinglePosts(postId)
            .then((post) => {
                this.setState({
                    post: post,
                })

            })
    }

    loadComments = () => {
        let postId = this.props.match.params.id
        fetchComments(postId)
            .then((comm) => {
                this.setState({
                    comments: comm
                })
            })
    }

    onCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    onCreateCommentClick = (event) => {
        event.preventDefault();

        const { comment, post } = this.state;
        if (this.state.comment === "") {
            alert("you didn't type anything")
        } else {
            Comments.create(comment, post.id)
                .then(() => {
                    this.loadComments(post.id)
                    this.setState({
                        comment: ""
                    })
                });
        }
    }
    DeleteComments = (id) => {
        deleteComments(id).then((comm) => {
            window.location.reload()
        })
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return <p>loading.....</p>
        }


        if (post.type === "video") {
            return (
                <Video post={this.state.post} comments={this.state.comments} comment={this.state.comment} onCreateCommentClick={this.onCreateCommentClick} onCommentChange={this.onCommentChange} DeleteComments={this.DeleteComments}></Video>
            )
        }
        if (post.type === "image") {
            return (
                <Image post={this.state.post} comments={this.state.comments} comment={this.state.comment} onCreateCommentClick={this.onCreateCommentClick} onCommentChange={this.onCommentChange} DeleteComments={this.DeleteComments} />
            )
        } else if (post.type === "text") {
            return (
                <Text post={this.state.post} comments={this.state.comments} comment={this.state.comment} onCreateCommentClick={this.onCreateCommentClick} onCommentChange={this.onCommentChange} DeleteComments={this.DeleteComments} />

            )
        }

    }
}

export default SinglePost
