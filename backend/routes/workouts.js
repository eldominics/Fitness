const express = require('express')
const {createWorkout, getWorkout, getAllWorkout, deleteWorkout, updateWorkout} = require('../controller/work-controllers')

const router = express.Router()

router.get('/', getAllWorkout)
router.post('/', createWorkout)

router.get('/:id', getWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router 