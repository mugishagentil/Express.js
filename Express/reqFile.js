const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT
// Create Static Server Folder
app.use(express.static(path.join(__dirname, '/public')))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public', 'index.html'))
// })
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, './public', 'about.html'))
// })
app.listen(PORT, () =>{
    console.log(`My Server Is: ${PORT}`)
})

// app.get('/', (req, res) => {
//     res.send(`<h1>Home Page</h1>`)
// })