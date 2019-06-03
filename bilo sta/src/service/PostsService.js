import { BASE_URL, API_KEY } from '../app/shared/mainVaribales'

class PostService {

    postPost(data) {

        return fetch(`${BASE_URL}/posts`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "x-api-key": `${API_KEY}`,
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`

            },
        })
            .then(response => response.json())
            .then((post) => {
                console.log('postPost response: ', post)
                return post;
            })
    }
}

export const Post = new PostService();