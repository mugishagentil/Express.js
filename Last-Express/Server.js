const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, "./Public")))

app.listen(PORT, () => {
    console.log(`Server Is Running: ${PORT}`)
})