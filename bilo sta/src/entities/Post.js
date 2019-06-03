class Post {
    constructor(createdAt, id, isPublic, type, userId, comments) {
        this.createdAt = createdAt;
        this.id = id;
        this.isPublic = isPublic;
        this.type = type;
        this.userId = userId;
        this.comments = comments;
    }


}
class Image extends Post {
    constructor(createdAt, id, isPublic, type, userId, comments, imgUrl) {
        super(createdAt, id, isPublic, type, userId, comments)
        this.imgUrl = imgUrl
    }
}


class Video extends Post {
    constructor(createdAt, id, isPublic, type, userId, comments, videoUrl) {
        super(createdAt, id, isPublic, type, userId, comments)
        this.videoUrl = videoUrl
    }
}

class Text extends Post {
    constructor(createdAt, id, isPublic, type, userId, comments, text) {
        super(createdAt, id, isPublic, type, userId, comments)
        this.text = text
    }
}

export { Image, Video, Text, Post }