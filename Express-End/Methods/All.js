import express from "express"
const app = express()
const PORT = process.env.PORT
// import path from "path"
// import {fileURLToPath} from "url"
import logger from './middleware/logger.js' 


// Get The Directory Name
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// Static Folder
// app.use(express.static(path.join(__dirname, "Public")))


// Body Parse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

let posts = [
    {id: 1, title: "Post One"},
    {id: 2, title: "Post Two"},
    {id: 3, title: "Post Three"},
    {id: 4, title: "Post Four"},
    {id: 5, title: "Post Five"},
    
]
// Logger Middle Ware
app.use(logger)

// Request All Posts
app.get('/api/posts', logger, (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts) 
})


// Request One Post
app.get('/api/posts/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(post){
        res.status(201).json(post)
    }else{
       const error = new Error(`User With Id ${id} Not Found`)
       return next(error)
    }
})


// Test New Post
// app.post('/api/posts', (req, res) =>{
//     console.log(req.body)
//     res.status(201).json(posts)
// })



// Create New Post
app.post('/api/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };
    if(!newPost.title){
        res.status(400).json({message: "Please include a title"})
    }
    posts.push(newPost)
    res.status(201).json(posts)
})


// Update Post
app.put('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        res.status(404).json({message: `User With Id ${id} Not Found`})
    }else{
        post.title = req.body.title
        res.status(200).json(posts)
    }
})


// Delete Post
app.delete('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        res.status(404).json({message: `User With Id ${id} Not Found`})
    }else{
        posts = posts.filter((post) => post.id !== id)
        res.status(200).json(posts)
    }
})

app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`)
})