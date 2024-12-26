const express = require('express')
const app = express()
const PORT = process.env.PORT
const Posts = [
    {id: 1, Title: 'Post One'},
    {id: 2, Title: 'Post Two'},
    {id: 3, Title: 'Post Three'},
    {id: 4, Title: 'Post Four'},
    {id: 5, Title: 'Post Five '},
]

// Get All Post
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0) {
        res.status(200).json(Posts.slice(0, limit));
    }else{
        res.status(200).json(Posts)
    }
    
})

// Get Single Post
app.get('/api/posts/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const poste= Posts.find((Post) => Post.id === id)
    // res.json(Posts.filter((Port) => Port.id === id))
    if(poste){
        res.status(200).json(poste)
    }else{
        res.status(404).json({message: `User Of Id: ${id} Not Found`})
    }
})
app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`)
})