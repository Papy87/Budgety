import { Image, Video, Text } from "../entities/Post"
import React from 'react';
import { Link } from "react-router-dom"
import { BASE_URL, API_KEY } from '../shared/mainVaribales'


const FetchPosts = () => {
    return fetch(`${BASE_URL}/posts?_embed=comments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`

        }
    })
        .then(response => response.json())
        .then((post) => {
            // console.log(post);
            return post.map((posts) => {
                if (posts.type === "video") {
                    let VideoOne = new Video(posts.createdAt, posts.id, posts.isPublic, posts.type, posts.userId, posts.comments, posts.videoUrl)
                    // console.log(VideoOne.comments);
                    return (

                        <Link to={`/singlePost/${posts.id}`}> <div className="card row" key={VideoOne.id} >
                            <iframe width="560" height="315" src={VideoOne.videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="card-body row">
                                <p className="col-6">Video post</p>
                                <p className="col-6 comment">{VideoOne.comments.length} comments</p>

                            </div>
                        </div></Link>

                    )
                }
                else if (posts.type === "image") {
                    let ImageOne = new Image(posts.createdAt, posts.id, posts.isPublic, posts.type, posts.userId, posts.comments, posts.imageUrl)
                    // console.log(ImageOne.comments);
                    return (
                        <Link to={`/singlePost/${posts.id}`}>  <div className="card row" key={ImageOne.id} >
                            <img className="col-12" src={ImageOne.imgUrl} alt="image" />
                            <div className="card-body row">
                                <p className="col-6">Image post</p>
                                <p className="col-6 comment">{ImageOne.comments.length} comments</p>

                            </div>
                        </div ></Link>
                    )
                }
                else if (posts.type === "text") {
                    let TextOne = new Text(posts.createdAt, posts.id, posts.isPublic, posts.type, posts.userId, posts.comments, posts.text)
                    return (
                        <Link to={`/singlePost/${posts.id}`}>  <div className="card" key={TextOne.id}>
                            <div className="card-body row">
                                <p className="card-text col-12">{TextOne.text}</p>
                                <p className="col-6">Text Post</p>
                                <p className="col-6 comment">{TextOne.comments.length} comments</p>
                            </div>
                        </div></Link>
                    )
                }
            })
        })

}
export default FetchPosts