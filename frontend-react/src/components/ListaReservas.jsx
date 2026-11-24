export default function ListaReservas({ reservas, cargando }) {
    return (
        <div className="row mt-5">
            <div className="col-12">
                <h2 className="text-center mb-4">
                    Mis Reservaciones ({reservas.length})
                </h2>

                {cargando ? (
                    <p className="text-center">Cargando reservaciones...</p>
                ) : reservas.length === 0 ? (
                    <p className="text-center text-muted">No tienes reservaciones registradas.</p>
                ) : (
                    <div className="row g-4 justify-content-center">
                        {reservas.map(r => (
                            <div key={r.id_reservas || r.id} className="col-md-4">
                                <div className="card shadow-sm h-100 rounded-4 p-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title mb-0">Mesa #{r.id_mesa}</h5>
                                            <span className="badge bg-warning text-dark text-uppercase">
                                                {r.estado}
                                            </span>
                                        </div>
                                        <p className="card-text mb-1">
                                            <i className="fa-solid fa-user me-2"></i>
                                            <strong>A nombre de:</strong> {r.nombre_completo}
                                        </p>
                                        <p className="card-text mb-1">
                                            <i className="fa-solid fa-envelope me-2"></i>
                                            {r.correo}
                                        </p>
                                        <p className="card-text mb-1">
                                            <i className="fa-solid fa-users me-2"></i>
                                            {r.numero_personas} {Number(r.numero_personas) === 1 ? "persona" : "personas"}
                                        </p>
                                        <p className="card-text mb-1">
                                            <i className="fa-solid fa-calendar-days me-2"></i>
                                            {r.fecha_reserva}
                                        </p>
                                        <p className="card-text mb-2">
                                            <i className="fa-solid fa-clock me-2"></i>
                                            {r.hora_reserva}
                                        </p>
                                        {r.notas && (
                                            <p className="card-text text-muted small border-top pt-2">
                                                <strong>Notas:</strong> {r.notas}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
