import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/authReducer"; 

const NavBar = () => {
    const dispatch  = useDispatch();

    const handleLogout = () => {
        dispatch (logout());
    }

    return (
        <nav>
            <ul>
                <li>Enlace 1</li>
                <li>Enlace 2</li>
                <li onClick={handleLogout}>Cerrar Sesion</li> 
            </ul>
        </nav>
    )
}

export default NavBar;