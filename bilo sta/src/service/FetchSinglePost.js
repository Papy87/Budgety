import Comment from "../entities/CommentsObj"
import { BASE_URL, API_KEY } from '../app/shared/mainVaribales'


const FetchSinglePosts = (postId) => {
    return fetch(`${BASE_URL}/posts/${postId}?_embed=comments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`,
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`

        }
    })
        .then(response => response.json())
        .then((post) => {
            return post
        })
}
const fetchComments = (postId) => {
    return fetch(`${BASE_URL}/comments?postId=${postId}&_expand=user`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`
        }
    }).then((response) => response.json())
        .then((comment) => {
            return comment[0] ? comment.map((elem) => {
                return new Comment(elem.body, elem.id, elem.postId, elem.sid, elem.user, elem.userId)
            }) : comment
        })
}

export { FetchSinglePosts, fetchComments }