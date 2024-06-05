import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authReducer";   


const LoginView = () => {
   
   const dispatch = useDispatch(); 

   const [form, setForm] = useState ({
    username: "",
    password: "",
   })

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
            <p>Ingrese sus datos de usuario a continuación</p>
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
        </div>
    )
}

LoginView.propTypes = {};

export default LoginView;