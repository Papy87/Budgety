const logInUser = (logInfo) => {
    console.log(logInfo);
    return fetch("https://book-api.hypetech.xyz/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(logInfo),
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then((res) => {
            if (res.statusCode > 400) {
                console.log(res);
                return Promise.reject(res.message)
            } else { res.error ? localStorage.removeItem("userToken") : localStorage.setItem("userToken", res.accessToken) }

        })
}

export default logInUser