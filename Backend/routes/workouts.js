const express=require('express');
const router=express.Router()

//Get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})
})

//Get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workouts'})
})

//Post a new workout
router.post('/',(req,res)=>{
    res.json({mssg:'Post a new workout'})
})

//Delete a new workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a workout'})
})

//Update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a workout'})
})

module.exports=router