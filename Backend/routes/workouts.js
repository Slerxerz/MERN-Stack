const express=require('express');
const router=express.Router()
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutcontroller')
const requireAuth = require('../middleware/requireauth')

//require auth for all workouts
router.use(requireAuth)

//Get all workouts
router.get('/',getWorkouts)

//Get single workout
router.get('/:id',getWorkout)

//Post a new workout
router.post('/',createWorkout)

//Delete a new workout
router.delete('/:id',deleteWorkout)

//Update a workout
router.patch('/:id',updateWorkout)

module.exports=router