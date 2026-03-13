const express = require('express')
const app = express()

const api = require('./presentation/api')

const pluginManager = require('./core/pluginManager')

const seoPlugin = require('./plugins/seoPlugin')
const commentPlugin = require('./plugins/commentPlugin')

app.use(express.json())

app.use('/api',api)

pluginManager.register(seoPlugin)
pluginManager.register(commentPlugin)

app.listen(3000,()=>{
    console.log("CMS running on port 3000")
})