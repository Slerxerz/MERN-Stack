import { AuthContext } from "../context/authcontext";
import { useContext } from "react";

export const useAuthContext = ()=>{
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("useAuthContext must be used within a AuthContextProvider instance")
    }
    return context
}