let store = require ('./in-memory_store').store

module.exports = {
    getPosts(req, res) {
        res.status(200).send(store.posts)  
    },
    addPost(req, res) {        
        let newPost = {
            name : req.body.name,
            url : req.body.url,
            text : req.body.text,
            comments : []
        }
        
        let idPost = store.posts.length
        store.posts.push(newPost)
        res.status(201).send({id: idPost})
    },
    updatePost(req, res) {
        let updatedPost = {
            name : req.body.name,
            url : req.body.url,
            text : req.body.text,    
            comments : store.posts[req.params.postId].comments
        }
        store.posts[req.params.postId] = updatedPost
        res.status(200).send(store.posts[req.params.postId])  
    },
    removePost(req, res) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
  }