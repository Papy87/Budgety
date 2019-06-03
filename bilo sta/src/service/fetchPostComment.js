import { BASE_URL, API_KEY } from '../app/shared/mainVaribales'


const fetchPostsComment = (comment) => {
    console.log(comment);
    return fetch(`${BASE_URL}/posts?_embed=comments`, {
        method: "POST",
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

export default fetchPostsComment