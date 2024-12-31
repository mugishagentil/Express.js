import express from "express"
const app = express()
const PORT = process.env.PORT

let Posts = [
    {id: 1, title: "Post One"},
    {id: 2, title: "Post Two"},
    {id: 3, title: "Post Three"},
    {id: 4, title: "Post Four"},
    {id: 5, title: "Post Five"},
]

app.get('/api/posts', (req, res) => {
    res.status(201).json(Posts)
})
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const Poste = Posts.find((post) => post.id === id)
    if(Poste){
        res.status(201).json(Poste)
    }else{
        res.status(404).json({message: "Use Not Found"})
    }
})

// Body Parse   Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Create New User
app.post('/api/posts', (req, res)=> {
    // const newPost = {
    //     id: Posts.length + 1, 
    //     title: req.body.title
    // };
    // if(!newPost.title){
    //     res.status(404).json({message: "Please Enter A Title"})
    // }else{
    //     Posts.push(newPost)
       console.log(req.body)
        res.status(201).json(Posts)
    // }
})

app.listen(PORT, () => {
    console.log(PORT, () => {
        `Server Is Running On ${PORT}`
    })
})