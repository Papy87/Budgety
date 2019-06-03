import React, { Component } from 'react';
import FetchPosts from "../../service/FetchPosts"
import Feed from './Feed'
import SortPosts from "./bootstrapModals/SortPosts"
import CreatePost from "./bootstrapModals/CreatePost"
import { Post } from '../../service/PostsService';



class FeedComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            posts1: []
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () => {
        FetchPosts().then((f_posts) => {
            // console.log(f_posts);
            this.setState({
                posts: f_posts,
                posts1: f_posts
            })
        })
    }

    VideoPost = () => {
        let arr = this.state.posts1.filter(element =>
            element.type === "video")
        this.setState({
            posts: arr
        })

    }

    ImagePost = () => {
        let arr = this.state.posts1.filter(element =>
            element.type === "image")
        this.setState({
            posts: arr
        })

    }

    TextPost = () => {
        let arr = this.state.posts1.filter(element =>
            element.type === "text")
        this.setState({
            posts: arr
        })
    }

    AllPosts = () => {
        this.setState({
            posts: this.state.posts1
        })
    }

    getNewPost = (data) => {
        Post.postPost(data)
            .then((res) => {
                this.getPosts()
                console.log(res);
            }
            );
        console.log(data);
    }





    render() {
        return (
            <>
                <SortPosts VideoPost={this.VideoPost} ImagePost={this.ImagePost} TextPost={this.TextPost} AllPosts={this.AllPosts} />
                <Feed posts={this.state.posts} />
                <CreatePost getNewPost={this.getNewPost} />
            </>
        )

    }
}

export default FeedComp