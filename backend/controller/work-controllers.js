const mongoose = require('mongoose')
const Workouts = require('../models/workout-model')

const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body 

    let emptyFields = []
    if(!title){ emptyFields.push('title')}
    if(!load){ emptyFields.push('load')}
    if(!reps){ emptyFields.push('reps')}
    
    if(emptyFields.length > 0){return res.status(400).json({error: 'please fill all fields', emptyFields})}
    try{
        const createdWorkouts = await Workouts.create({title, reps, load})
        res.status(200).json(createdWorkouts)
    } catch (error){
        res.status(400).json({error: error.message}) 
    }
 
}
const getAllWorkout = async(req, res) =>{
    const allWorkouts = await Workouts.find({}).sort({createdAt: -1})
    res.status(200).json(allWorkouts)
}

const getWorkout = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const oneWorkout = await Workouts.findById(id)
    if(!oneWorkout){
        return res.status(404).json({Error: "No such workout"})
    }
    res.status(200).json(oneWorkout)

}

const deleteWorkout = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "The workout you are trying to delete does not exist"})
    }
    const workoutToDelete = await Workouts.findOneAndDelete({_id: id})
    if (!workoutToDelete){
        return res.status(404).json({message: "This workout does not exist"})
    }

    res.status(200).json(workoutToDelete)
}

const updateWorkout = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "not a valid id to work with"})
    }
    const updatedWorkout = await Workouts.findOneAndUpdate({_id: id}, {...req.body})

    if(!updatedWorkout){
        return res.status(404).json({message: 'Could not update this workout'})
    }
    res.status(200).json(updatedWorkout)

}


module.exports = {createWorkout, getAllWorkout, getWorkout, deleteWorkout, updateWorkout}

