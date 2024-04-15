import { useAuthContext } from "./useauthcontext";
import { useState } from "react";

export const useSignup = ()=>{
    const[error,setError]= useState(null)
    const[isLoading,setIsLoading]= useState(null)
    const {dispatch}= useAuthContext()

    const signup = async(email,password)=>{
        setIsLoading(true)
        setError(null)

        const response= await fetch('/api/user/signup',{
            method: 'POST',
            body:JSON.stringify({email,password}),
            headers:{'Content-Type': 'application/json'}
        })
        const json= await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the authcontext
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
    }
    
    return {signup,error,isLoading}
}