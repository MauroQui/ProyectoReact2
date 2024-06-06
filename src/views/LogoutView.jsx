import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/authReducer";

const LogoutView = () => {
    const dispatch = useDispatch();
    
    const HandleLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <h1>Desconectarse</h1>
            <button onClick={HandleLogout}>Cerrar Sesión</button>
        </div>
    )
}

export default LogoutView;