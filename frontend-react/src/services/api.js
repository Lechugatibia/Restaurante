export async function apiRequest(ruta, opciones = {}) {
    const { method = "GET", token = "", body } = opciones;
    const headers = { Accept: "application/json" };

    if (body !== undefined) headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `Bearer ${token}`;

    const respuesta = await fetch(`/api${ruta}`, {
        method,
        headers,
        body: body !== undefined ? JSON.stringify(body) : undefined
    });

    const texto = await respuesta.text();
    let datos = null;
    try {
        datos = texto ? JSON.parse(texto) : null;
    } catch {
        throw new Error(`La API no devolvió un JSON válido (HTTP ${respuesta.status})`);
    }

    if (!respuesta.ok) {
        throw new Error(datos?.message ?? datos?.error ?? `Error HTTP ${respuesta.status}`);
    }

    return datos;
}
