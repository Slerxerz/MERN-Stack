import { useState } from "react"
import { useWorkoutContext } from "../hooks/useworkoutscontext"

const WorkoutForm = ()=>{
    const {dispatch} = useWorkoutContext(   )
    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [sets, setSets] = useState('')
    const [error, setError] = useState(null)
    

const handleSubmit= async (e) =>{
    e.preventDefault()
    const workout = {title,weight,reps,sets}
    const response= await fetch('/api/workouts/',
    {method: 'POST',
    body:JSON.stringify(workout),
    headers:{'Content-Type': 'application/json'}})
    const json= await response.json()
    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setTitle('')
        setWeight('')
        setReps('')
        setSets('')
        setError(null)
        console.log("New workout created",json)
        dispatch({type: 'CREATE_WORKOUT', payload:json})
    }
}

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Workout Name: </label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}
            value={title}/>
            <label>Weight (Kg):</label>
            <input type="number" onChange={(e)=>setWeight(e.target.value)}
            value={weight}/>
            <label>Reps:</label>
            <input type="number" onChange={(e)=>setReps(e.target.value)}
            value={reps}/>
            <label>Sets:</label>
            <input type="number" onChange={(e)=>setSets(e.target.value)}
            value={sets}/>
            <button >Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default WorkoutForm