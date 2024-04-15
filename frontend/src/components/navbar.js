import { Link } from "react-router-dom"
import { useLogout } from '../hooks/uselogout'
const Navbar = ()=>{
    const {logout} = useLogout()
    const handleClick = ()=>{
        logout()
    }

    return(
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Tracker</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>
                            Logout
                        </button>
                    </div>
                    <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>  
    )
}

export default Navbar;