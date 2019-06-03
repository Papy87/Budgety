import People from '../entities/People'
import { BASE_URL, API_KEY } from '../shared/mainVaribales'


const fetchPeople = () => {
    return fetch(`${BASE_URL}/users?_embed=posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`,
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`

        }
    })
        .then(response => response.json())
        .then((people) => {
            const peopleArr = []
            people.forEach(people => {
                peopleArr.push(new People(
                    people.avatarUrl,
                    people.name.first,
                    people.name.last,
                    people.about,
                    people.posts,
                    people.id
                ))
            });
            return peopleArr
        })
}

export default fetchPeople