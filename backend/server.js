require('dotenv').config()
const express = require ('express')
const app = express()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


//middleware to get stuffs sent with post, delete request and so on 
app.use( express.json() )

//just do sth before sending to the next middleware
app.use((req, res, next) =>{
    console.log(req.path, req.method)

    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {console.log("connected and listening on ", process.env.PORT)
    })
    })
    .catch((error) =>{
        console.log(error)
    })



