const express = require('express')

routerz = express.Router()

routerz.get('/', (req, res) =>{
    res.json({msg: 'get all deepwork'})
})


module.exports = routerz