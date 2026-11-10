<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Cliente;
use App\Models\Mesa;
use App\Models\Reserva;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

class SeguridadBasicaTest extends TestCase
{
    use RefreshDatabase;

    public function test_usuario_sin_autenticacion_no_puede_ver_reservas(): void
    {
        $response = $this->getJson('/api/reservas');

        $response->assertUnauthorized();
    }

    public function test_cliente_no_puede_modificar_reserva_ajena(): void
    {
        $clienteA = Cliente::create([
            'nombre' => 'Cliente Propietario',
            'correo' => 'propietario@example.com',
            'password' => 'ClaveSegura123',
        ]);

        $clienteB = Cliente::create([
            'nombre' => 'Cliente Invitado',
            'correo' => 'invitado@example.com',
            'password' => 'ClaveSegura123',
        ]);

        $mesa = Mesa::create([
            'num_mesa' => 1,
            'capacidad' => 4,
            'ubicacion' => 'Interior',
        ]);

        $reserva = Reserva::create([
            'id_cliente' => $clienteA->id_cliente,
            'id_mesa' => $mesa->id_mesa,
            'fecha_reserva' => '2026-10-25',
            'hora_reserva' => '20:00',
            'estado' => 'confirmada',
            'notas' => 'Reserva de prueba',
        ]);

        Sanctum::actingAs($clienteB);

        $response = $this->patchJson(
            '/api/reservas/' . $reserva->id_reservas,
            ['estado' => 'cancelada']
        );

        $response->assertForbidden();
    }
}