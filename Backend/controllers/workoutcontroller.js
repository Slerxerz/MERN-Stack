const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//get all workout
const getWorkouts = async (req, res) =>{
    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async (req, res) =>{
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout Found'})
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error:'No such Workout Found'})
    }
    res.status(200).json(workout)
}

//create workout
const createWorkout = async (req,res)=>{
    const {title,weight,reps,sets} = req.body

    let emptyField=[]
    if (!title) {
        emptyField.push('title')
    }
    if (!weight) {
        emptyField.push('weight')
    }
    if (!reps) {
        emptyField.push('reps')
    }
    if (!sets) {
        emptyField.push('sets')
    }
    if (emptyField.length>0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyField})
    }
    //add doc to db
    try {
        const user_id = req.user._id
        const workout = await Workout.create({title,weight,reps,sets,user_id})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Id type not valid'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if (!workout) {
        return res.status(404).json({error:'No such Workout Found'})
    }
    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Id type not valid'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({error:'No such Workout Found'})
    }
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}