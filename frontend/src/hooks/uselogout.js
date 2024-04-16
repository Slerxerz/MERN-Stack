import { useAuthContext } from "./useauthcontext"
import { useWorkoutContext } from "./useworkoutscontext"

export const useLogout =()=>{
    const { dispatch }=useAuthContext()
    const { dispatch: workoutsDispatch }=useWorkoutContext()
    const logout = ()=>{
        //remove user from the local storage
        localStorage.removeItem('user')
        window.location.reload()

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type:'SET_WORKOUTS',payload:null})
    }
        return {logout}
}