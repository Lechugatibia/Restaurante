import { useState } from "react";

export default function LoginForm({ onLogin }) {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(correo, password);
        setPassword("");
    };

    return (
        <div className="row justify-content-center w-100 my-4">
            <div className="col-md-5 col-lg-4">
                <form className="form-container text-center w-100" onSubmit={handleSubmit}>
                    <h2 className="mb-4">Inicio de sesión</h2>
                    <p className="text-muted small mb-4">
                        Inicia sesión para gestionar tus reservaciones
                    </p>

                    <div className="mb-3 position-relative">
                        <input
                            type="email"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            placeholder="Correo electrónico"
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                        />
                        <i className="fa-solid fa-user icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <input
                            type="password"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            placeholder="Contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <i className="fa-solid fa-key icon"></i>
                    </div>

                    <button type="submit" className="boton w-100 rounded-pill py-3">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
