export default function Navbar({ token, onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container">
                <img src="/Imagenes/res-cruda.png" width="50" alt="Logo Braza y Desierto" />
                <h2 className="titulo">Braza y Desierto</h2>

                <button
                    className="navbar-toggler text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    ☰
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item"><a className="nav-link" href="/index.html">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="/html/nosotros.html">Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" href="/html/productos.html">Productos</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#reservaciones">Reservaciones</a></li>
                        <li className="nav-item"><a className="nav-link" href="/html/contacto.html">Contacto</a></li>
                        {token && (
                            <li className="nav-item ms-lg-3">
                                <button
                                    onClick={onLogout}
                                    className="btn btn-sm btn-danger rounded-pill px-3"
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
