const express = require("express")
const app = express()
const User = require('./router/Posts')
// const path = require("path")
const PORT = process.env.PORT 
// const Post = require('./router/Posts')

// app.use('/api/users', Post)
app.use('/api/users', User)
// app.use(express.static(path.join(__dirname, "Public")))

app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`)
})