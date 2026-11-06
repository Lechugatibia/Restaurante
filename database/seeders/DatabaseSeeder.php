<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cliente;
use App\Models\Mesa;
use App\Models\Reserva;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Insertar 2 Clientes
        $cliente1 = Cliente::create([
            'nombre' => 'Carlos Mendoza',
            'correo' => 'carlos@mail.com'
        ]);

        $cliente2 = Cliente::create([
            'nombre' => 'Ana Gómez',
            'correo' => 'ana@mail.com'
        ]);

        // 2. Insertar 2 Mesas
        $mesa1 = Mesa::create([
            'num_mesa' => 5,
            'capacidad' => 4,
            'ubicacion' => 'Terraza'
        ]);

        $mesa2 = Mesa::create([
            'num_mesa' => 12,
            'capacidad' => 2,
            'ubicacion' => 'Salón Principal'
        ]);

        // 3. Insertar 2 Reservas (viculadas a los clientes y mesas anteriores)
        Reserva::create([
            'id_cliente' => $cliente1->id_cliente,
            'id_mesa' => $mesa1->id_mesa,
            'fecha_reserva' => '2026-10-15',
            'hora_reserva' => '20:00:00',
            'estado' => 'confirmada',
            'notas' => 'Mesa cerca de la vista exterior.'
        ]);

        Reserva::create([
            'id_cliente' => $cliente2->id_cliente,
            'id_mesa' => $mesa2->id_mesa,
            'fecha_reserva' => '2026-10-16',
            'hora_reserva' => '14:30:00',
            'estado' => 'pendiente',
            'notas' => 'Celebración de cumpleaños.'
        ]);
    }
}
