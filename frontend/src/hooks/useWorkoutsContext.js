import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";


export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('useWorkoutContext cannot be used in this component.')
    }

    return context

}