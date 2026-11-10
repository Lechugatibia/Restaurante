<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ReservaController;

// Registro de clientes
Route::post('/clientes', [ClienteController::class, 'store']);
Route::get('/clientes', [ClienteController::class, 'index']);
Route::get('/clientes/{id}', [ClienteController::class, 'show']);

// Inicio de sesión
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas con Sanctum
Route::middleware('auth:sanctum')->group(function () {

    // Datos del cliente autenticado
    Route::get('/me', function (Request $request) {
        $cliente = $request->user();

        return response()->json([
            'id_cliente' => $cliente->id_cliente,
            'nombre' => $cliente->nombre,
            'correo' => $cliente->correo,
        ]);
    });

    // CRUD completo de reservas
    Route::apiResource('reservas', ReservaController::class);
});
Route::post('/logout', [AuthController::class, 'logout']);