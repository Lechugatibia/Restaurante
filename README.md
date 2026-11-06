# Sistema de Reservaciones de Restaurante - Backend (Laravel API)

Backend desarrollado en Laravel 13 con PostgreSQL para la gestión segura de reservaciones de restaurante, configurado para consumo autenticado desde una SPA en React mediante Sanctum (cookies y sesiones).

---

##  Variables de Entorno Requeridas (`.env`)

Para ejecutar la aplicación localmente, asegúrate de configurar las siguientes variables dentro de tu archivo `.env`:

```ini
APP_NAME=Restaurante
APP_ENV=local
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=reservas_restaurante
DB_USERNAME=postgres
DB_PASSWORD=felipe1234

SESSION_DRIVER=file
CACHE_STORE=file
SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost:8000

##  Catálogo de Endpoints de la API

### Autenticación y Sesiones (`routes/web.php`)
- `GET /sanctum/csrf-cookie` — Obtiene las cookies CSRF y de sesión iniciales.
- `POST /login` — Inicia sesión validando las credenciales del cliente (`correo`, `password`).
- `POST /logout` — Cierra la sesión activa del cliente.

### API de Reservaciones Protegida (`routes/api.php` bajo `auth:sanctum`)
- `GET /api/me` — Devuelve los datos del cliente autenticado (`id_cliente`, `nombre`, `correo`).
- `GET /api/reservas` — Lista las reservaciones pertenecientes al cliente autenticado (soporta paginación y filtros).
- `POST /api/reservas` — Crea una nueva reservación asignando automáticamente el `id_cliente` desde la sesión activa (responde `422` si el cliente intenta enviar `id_cliente` en el cuerpo de la petición).
- `GET /api/reservas/{reserva}` — Muestra el detalle de una reservación propia (responde `403` si pertenece a otro cliente).
- `PUT/PATCH /api/reservas/{reserva}` — Actualiza los datos de una reservación propia (responde `403` si pertenece a otro cliente).
- `DELETE /api/reservas/{reserva}` — Elimina una reservación propia (responde `403` si pertenece a otro cliente).
