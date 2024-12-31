const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT

const Posts = [
    {id: 1, Title: 'Post One'},
    {id: 2, Title: 'Post Two'},
    {id: 3, Title: 'Post Three'},
    {id: 4, Title: 'Post Four'},
    {id: 5, Title: 'Post Five'},
]
// Request static file
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
app.get('/api/posts', (req, res) => {
    res.json(Posts)
})
app.listen(PORT, () => {
    console.log(`Server Is Running On: ${PORT}`)
})
