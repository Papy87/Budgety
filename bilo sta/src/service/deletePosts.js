import { API_KEY } from '../app/shared/mainVaribales'

const deletePosts = (postId) => {
    return fetch("http://book-api-dev.hypetech.xyz/posts/" + postId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`,
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    })
}

const deleteComments = (commId) => {
    console.log(commId);
    return fetch(`http://book-api-dev.hypetech.xyz/comments/${commId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`,
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
    })
}

export { deletePosts, deleteComments }