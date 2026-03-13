const express = require('express')
const router = express.Router()

const contentService = require('../application/contentService')

router.post('/posts',(req,res)=>{

    const {title,content} = req.body

    const post = contentService.createPost(title,content)

    res.json(post)
})

router.get('/posts',(req,res)=>{

    const posts = contentService.listPosts()

    res.json(posts)
})

module.exports = router