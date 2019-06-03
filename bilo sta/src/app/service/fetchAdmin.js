import AdminObj from '../entities/Admin'
import { BASE_URL, API_KEY } from '../shared/mainVaribales'

const fetchAdmin = (id) => {
    return fetch(`${BASE_URL}/users/${id}/?_embed[]=comments&_embed[]=posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`,
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`

        }
    })
        .then(response => response.json())
        .then((user) => {
            const admin = new AdminObj(
                user.avatarUrl,
                user.name.first,
                user.name.last,
                user.about,
                user.comments.length,
                user.posts.length
            )
            // console.log(user.comments.length);
            // console.log(admin);
            return admin
        })
}

export default fetchAdmin

// "x-api-key": "B1tPr0d",



