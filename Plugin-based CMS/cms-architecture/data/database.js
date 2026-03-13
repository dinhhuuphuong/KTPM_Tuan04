let posts = []

function addPost(post){
    posts.push(post)
}

function getPosts(){
    return posts
}

module.exports = {
    addPost,
    getPosts
}