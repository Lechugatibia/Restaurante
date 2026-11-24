import { useEffect, useState } from "react";
import { apiRequest } from "./services/api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import ReservaForm from "./components/ReservaForm.jsx";
import ListaReservas from "./components/ListaReservas";

export default function App() {
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");
    const [reservas, setReservas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");
    const [mensajeExito, setMensajeExito] = useState("");
    const [recarga, setRecarga] = useState(0);

    useEffect(() => {
        if (!token) return;
        let activo = true;
        async function cargarReservas() {
            setCargando(true);
            setError("");
            try {
                const datos = await apiRequest("/reservas", { token });
                const lista = Array.isArray(datos) ? datos : (datos?.data || datos?.reservas || []);
                if (activo) setReservas(lista);
            } catch (e) {
                if (activo) setError(e.message);
            } finally {
                if (activo) setCargando(false);
            }
        }
        cargarReservas();
        return () => { activo = false; };
    }, [token, recarga]);

    async function manejarLogin(correo, password) {
        setError("");
        try {
            const datos = await apiRequest("/login", {
                method: "POST",
                body: { correo, password }
            });
            const recibido = datos?.token ?? datos?.access_token ?? datos?.data?.token;
            if (!recibido) throw new Error("No se encontró el token en la respuesta.");

            localStorage.setItem("token", recibido);
            setToken(recibido);
        } catch (e) {
            setError(e.message);
        }
    }

    function cerrarSesion() {
        localStorage.removeItem("token");
        setToken("");
        setReservas([]);
        setError("");
        setMensajeExito("");
    }

    async function manejarCrearReserva(nuevaReserva) {
        setError("");
        setMensajeExito("");
        try {
            await apiRequest("/reservas", {
                method: "POST",
                token,
                body: nuevaReserva
            });
            setMensajeExito("Tu reservación fue registrada correctamente.");
            setRecarga(n => n + 1);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    }

    return (
        <>
            <Navbar token={token} onLogout={cerrarSesion} /> {/* <-- 3. Agregado "/>" */}

            <div className="container py-5 mt-5">
                {error && <div className="alert alert-danger text-center">{error}</div>}
                {mensajeExito && <div className="alert alert-success text-center">{mensajeExito}</div>}

                {!token ? (
                    <LoginForm onLogin={manejarLogin} />
                ) : (
                    <>
                        <ReservaForm onCrearReserva={manejarCrearReserva} />
                        <ListaReservas reservas={reservas} cargando={cargando} />
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}
