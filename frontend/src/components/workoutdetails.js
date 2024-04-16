import {useWorkoutContext} from '../hooks/useworkoutscontext'
import { useAuthContext } from '../hooks/useauthcontext'
//date fns
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout})=>{
    const {dispatch}=useWorkoutContext()
    const {user}=useAuthContext()
    const handleClick= async()=>{
        if(!user){
            return
        }
        const response=await fetch('/api/workouts/'+workout._id,{
            method: 'DELETE',headers:{'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
         
        if(response.ok){
            dispatch({type:'DELETE_WORKOUT',payload:json})
        }
    }
    return (
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><strong>Weight (kg): </strong>{workout.weight}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <p><strong>Sets : </strong>{workout.sets}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}
export default WorkoutDetails; 