'use client';
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const IndexPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    }

    const handleRegisterClick = () => {
        setShowRegister(true);
    }

    const handleCloseLogin = () => {
        setShowLogin(false);
    }

    const handleCloseRegister = () => {
        setShowRegister(false);
    }

    return (
        <div>
            
            <button onClick={handleLoginClick}>Iniciar sesión</button>
            <br />
            <button onClick={handleRegisterClick}>Registro</button>
            {showLogin && <Login onClose={handleCloseLogin}/>}
            {showRegister && <Register onClose={handleCloseRegister} />}
        
        </div>
    )
}

export default IndexPage;