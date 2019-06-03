import { BASE_URL, API_KEY } from '../shared/mainVaribales'

const regUser = (userData) => {
    // const fullName = userData.name.split(' ');
    const newUser = {
        // name: {
        //     first: fullName[0],
        //     last: fullName[1]
        // },
        name: userData.name,
        email: userData.email,
        password: userData.pass
    }
    return fetch(`${BASE_URL}/auth/register/`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${API_KEY}`
        }
    })
        .then(response => response.json())
        .then((res) => {
            if (res.statusCode > 400) {
                // return new Promise((resolve, reject) => reject(res.message));
                return Promise.reject(res);
            }
            else {
                alert("User account successfully created! ")
                localStorage.setItem('userToken', res.accessToken)
                console.log(res);
            }
            // if (user.statusCode > 400) {
            //     alert(user.message)
            //     return false;
            // }
            // else {
            //     alert("User account successfully created! ")
            //     localStorage.setItem('userToken', user.accessToken)
            //     console.log(user);
            //     return true;
            // }
        })

}

export default regUser

