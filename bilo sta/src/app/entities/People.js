class People {
    constructor(avatar, firstName, lastName, about, lastPost, id) {
        this.id = id;
        this.avatar = (avatar) ? avatar : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Afro-512.png';
        this.name = `${firstName} ${lastName}`
        this.about = about ? about : {
            bio: "zajebant",
            countryCode: "SRB",
            job: "wanna be programer"
        };
        this.lastPost = ((lastPost.length !== 0) && (lastPost === undefined)) ? lastPost[0].createdAt.slice(11, 16) : 'no post yet'
    }
}

export default People;