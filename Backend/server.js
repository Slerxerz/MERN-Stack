require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes=require('./routes/workouts')
const userRoutes=require('./routes/user')

//express app
const app=express();
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        const PORT = process.env.PORT || 8000
        //listen for requests
        app.listen(PORT,()=>{
            console.log('Connected to the Database and listening on port',PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })

    app.get('/',(res,req)=>{
        res.status(200).json({message:"Connected to the backend"})
    })