let store = require ('./in-memory_store').store

module.exports = {
    getComments(req, res) {
        res.status(200).send(store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {        
        let postId = req.params.postId
        let newComment = {
            text: req.body.text
        }        
        let commentId = store.posts[postId].comments.length
        store.posts[postId].comments.push(newComment)
        res.status(201).send({id: commentId})   
    },
    updateComment(req, res) {
        let updatedComment = {
            text : req.body.text
        }
        let postId = req.params.postId 
        let commentId = req.params.commentId
        store.posts[postId].comments[commentId] = updatedComment
        res.status(200).send(store.posts[postId].comments[commentId])
      
    },
    removeComment(req, res) {
        let postId = req.params.postId 
        let commentId = req.params.commentId
        store.posts[postId].comments.splice(commentId, 1)
        res.status(204).send()
    }  
  }