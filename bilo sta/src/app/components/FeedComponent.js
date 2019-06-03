import React, { Component } from 'react';
import VideoFeed from "./feedComponents/VideoFeed"
import ImageFeed from "./feedComponents/ImageFeed"
import TextFeed from "./feedComponents/TextFeed"



class FeedComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postType: "all"
        }
    }

    onDeleteButtonClick = (event) => {
        event.preventDefault()
        let id = event.target.getAttribute("id")
        console.log(id);
        console.log(event.target);
        this.props.DeletePosts(id)
    }
    render() {
        const posts = this.props.posts;

        if (posts.length === 0) {
            return (
                <div className="feed ">
                    <p>Loading....</p>
                </div>
            )
        } else {
            return (
                posts.map((post) => {
                    if (post.type === "video") {
                        return (
                            <VideoFeed post={post} onDeleteButtonClick={this.onDeleteButtonClick} />
                        )
                    } else if (post.type === "image") {
                        return (
                            <ImageFeed post={post} onDeleteButtonClick={this.onDeleteButtonClick} />
                        )
                    } else if (post.type === "text") {
                        return (
                            <TextFeed post={post} onDeleteButtonClick={this.onDeleteButtonClick} />
                        )
                    }
                }
                )
            )
        }

    }

}
export default FeedComponent