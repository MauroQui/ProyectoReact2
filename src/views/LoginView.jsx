import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { login } from "../reducers/authReducer";   


const LoginView = () => {
   
    const [form, setForm] = useState ({
    username: "",
    password: "",
   })

   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
   
   const dispatch = useDispatch();
   
   const HandleLogin = (evento) => {
    evento.preventDefault();
    console.log("Login");
    console.log("Username:", form.username);
    console.log("Password:", form.password);
    
    dispatch(login()); 
   }

   const handleFormChange = (evento) => {
    const inputName = evento.target.name;
    const inputValue = evento.target.value;
    setForm({
        ...form,
        [inputName]:inputValue,
    })
   }
   
    return(
        <div>
            <h1>Iniciar Sesión</h1>
            {isAuthenticated ? (
                <h2>Ahora estas autenticado!</h2>
            ) : (    
                <>
                <h2>Ingrese sus datos de usuario a continuación</h2>
                <form onSubmit={HandleLogin}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Ingrese nombre de usuario"
                        value={form.username}
                        onChange={handleFormChange}
                    />
                    <br />
                    <br />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Ingrese Contraseña"
                        value={form.password}
                        onChange={handleFormChange}    
                    />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </form>
                </>
            )}
        </div>
    )
}

LoginView.propTypes = {};

export default LoginView;