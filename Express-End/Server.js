import express from "express"
const app = express()
import path from "path"
import posts from "./router/posts.js"
const PORT = process.env.PORT

app.use('/api/posts', posts)

app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`)
})