const express = require('express')
const app = express()
const PORT = process.env.PORT

const Posts = [
    {id: 1, Titl: 'Post One'},
    {id: 2, Titl: 'Post Two'},
    {id: 3, Titl: 'Post Three'},
    {id: 4, Titl: 'Post Four'},
    {id: 5, Titl: 'Post Five'}
]
app.get('/api/posts', (req, res) => {
    res.json(Posts)
})
app.listen(PORT, () => {
    console.log(`Server Is Running On: ${PORT}`)
})