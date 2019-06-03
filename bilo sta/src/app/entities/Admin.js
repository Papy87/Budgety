class AdminObj {
    constructor(avatar, firstName, lastName, about, comments, posts) {
        this.avatar = (avatar) ? avatar : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Afro-512.png';
        this.name = `${firstName} ${lastName}`;
        this.lastName = lastName;
        this.about = about ? about : {
            bio: "zajebant",
            countryCode: "SRB",
            job: "wanna be programer"
        };
        this.comments = comments ? comments : 'no ';
        this.posts = posts ? posts : 'no ';
    }
}

export default AdminObj