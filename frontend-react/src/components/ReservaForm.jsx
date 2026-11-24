import { useState } from "react";

export default function ReservaForm({ onCrearReserva }) {
    const [idMesa, setIdMesa] = useState("");
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [correoReserva, setCorreoReserva] = useState("");
    const [numeroPersonas, setNumeroPersonas] = useState("");
    const [fechaReserva, setFechaReserva] = useState("");
    const [horaReserva, setHoraReserva] = useState("");
    const [notas, setNotas] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const exito = await onCrearReserva({
            id_mesa: idMesa,
            nombre_completo: nombreCompleto,
            correo: correoReserva,
            numero_personas: Number(numeroPersonas),
            fecha_reserva: fechaReserva,
            hora_reserva: horaReserva,
            estado: "Confirmada",
            notas
        });

        if (exito) {
            setIdMesa("");
            setNombreCompleto("");
            setCorreoReserva("");
            setNumeroPersonas("");
            setFechaReserva("");
            setHoraReserva("");
            setNotas("");
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
                <form onSubmit={handleSubmit} className="form-container text-center w-100">
                    <h2 className="mb-4">Reservar Mesa</h2>

                    <div className="mb-3 position-relative">
                        <input
                            type="text"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            placeholder="Nombre completo"
                            value={nombreCompleto}
                            onChange={e => setNombreCompleto(e.target.value)}
                        />
                        <i className="fa-solid fa-user icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <input
                            type="email"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            placeholder="Correo electrónico (Gmail)"
                            value={correoReserva}
                            onChange={e => setCorreoReserva(e.target.value)}
                        />
                        <i className="fa-solid fa-envelope icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <input
                            type="number"
                            min="1"
                            max="20"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            placeholder="Número de personas"
                            value={numeroPersonas}
                            onChange={e => setNumeroPersonas(e.target.value)}
                        />
                        <i className="fa-solid fa-users icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <input
                            type="number"
                            min="1"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            placeholder="ID de la Mesa (Ej. 1)"
                            value={idMesa}
                            onChange={e => setIdMesa(e.target.value)}
                        />
                        <i className="fa-solid fa-chair icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <input
                            type="date"
                            required
                            min="2026-05-21"
                            max="2026-12-31"
                            className="form-control rounded-pill px-4 py-3"
                            value={fechaReserva}
                            onChange={e => setFechaReserva(e.target.value)}
                        />
                        <i className="fa-solid fa-calendar-days icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <input
                            type="time"
                            required
                            className="form-control rounded-pill px-4 py-3"
                            value={horaReserva}
                            onChange={e => setHoraReserva(e.target.value)}
                        />
                        <i className="fa-solid fa-clock icon"></i>
                    </div>

                    <div className="mb-3 position-relative">
                        <textarea
                            className="form-control rounded-4 px-4 py-3"
                            rows="3"
                            placeholder="¿Alguna petición especial o nota?"
                            value={notas}
                            onChange={e => setNotas(e.target.value)}
                        />
                        <i className="fa-solid fa-comment icon"></i>
                    </div>

                    <button type="submit" className="boton w-100 rounded-pill py-3">
                        Agendar Reserva
                    </button>
                </form>
            </div>
        </div>
    );
}
