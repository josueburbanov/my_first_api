const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

//Middleware
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())



const {getPosts, addPost, updatePost, removePost} = require('./routes').posts
const {getComments, addComment, updateComment, removeComment} = require('./routes').comments

app.get('/posts', getPosts)
app.post('/posts',addPost)
app.put('/posts/:postId/',updatePost)
app.delete('/posts/:postId/',removePost)


app.get('/posts/:postId/comments',getComments)
app.post('/posts/:postId/comments',addComment)
app.put('/posts/:postId/comments/:commentId',updateComment)
app.delete('/posts/:postId/comments/:commentId',removeComment)

app.listen(3000)