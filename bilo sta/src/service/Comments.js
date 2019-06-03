import { BASE_URL, API_KEY } from '../app/shared/mainVaribales'


class CommentsService {

    create(comment, postId) {
        const apiComment = {
            sid: Math.floor(Math.random() * 100000),
            postId: postId,
            userId: 2,
            body: comment,
        };

        return fetch(`${BASE_URL}/comments`, {
            method: "POST",
            body: JSON.stringify(apiComment),
            headers: {
                "Content-Type": "application/json",
                "x-api-key": `${API_KEY}`,
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`

            },
        })
            .then(response => response.json())
            .then((comment) => {
                console.log('response: ', comment)
                return comment;
            })
    }
}

export const Comments = new CommentsService();