import { Video, Image, Text } from "../entities/Post"
import { BASE_URL, API_KEY } from '../app/shared/mainVaribales'

const FetchPosts = () => {
    return fetch(`${BASE_URL}/posts?_embed=comments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`,
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`

        }
    })
        .then(response => response.json())
        .then((elem) => {
            return elem.map((elem) => {
                if (elem.type === "video") {
                    return new Video(elem.createdAt, elem.id, elem.isPublic, elem.type, elem.userId, elem.comments, elem.videoUrl)
                }
                else if (elem.type === "image") {
                    return new Image(elem.createdAt, elem.id, elem.isPublic, elem.type, elem.userId, elem.comments, elem.imageUrl)
                }
                else if (elem.type === "text") {
                    return new Text(elem.createdAt, elem.id, elem.isPublic, elem.type, elem.userId, elem.comments, elem.text)
                }
            }).reverse()
        })

}

export default FetchPosts