const express = require("express")
const router = express.Router

const Users = [
    {id: 1, name: "Gentil"},
    {id: 2, name: "Katy"},
    {id: 3, name: "Marlene"},
    {id: 4, name: "Vierra"},
    {id: 5, name: "Urban"},
] 
router.get('/api/users', (req, res) => {
    res.json(Users)
})
router.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const User = Users.find((use) => use.id === id)
    if(User){
        res.status(200).json(User)
    }else{
        res.status(200).json({message: 'User Not Found'})
    }
})
module.exports = router
