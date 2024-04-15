import { useAuthContext } from "./useauthcontext"

export const useLogout =()=>{
    const { dispatch }=useAuthContext()

    const logout = ()=>{
        //remove user from the local storage
        localStorage.removeItem('user')
        window.location.reload()

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
    }
        return {logout}
}