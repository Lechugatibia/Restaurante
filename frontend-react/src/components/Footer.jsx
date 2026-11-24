export default function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-4 mb-4">
                        <h4 className="footer-title">Braza y Desierto</h4>
                        <p>Tradición, fuego y sabor norteño en cada corte.</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="footer-subtitle">Síguenos</h5>
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="footer-subtitle">Contacto</h5>
                        <p>777 123 4567</p>
                        <p>brazaydesierto@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Braza y Desierto - Todos los derechos reservados</p>
            </div>
        </footer>
    );
}
