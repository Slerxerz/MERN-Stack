import { WorkoutContext } from "../context/workoutcontext";
import { useContext } from "react";

export const useWorkoutContext = ()=>{
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error("useWorkoutContext must be used within a WorkoutContextProvider instance")
    }
    return context
}