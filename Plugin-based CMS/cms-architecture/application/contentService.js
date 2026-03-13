const db = require('../data/database')
const Post = require('../domain/post')

function createPost(title,content){

    const post = new Post(title,content)

    db.addPost(post)

    return post
}

function listPosts(){
    return db.getPosts()
}

module.exports = {
    createPost,
    listPosts
}