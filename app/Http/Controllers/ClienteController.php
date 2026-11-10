<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ClienteController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Cliente::all(), 200);
    }

    public function store(Request $request): JsonResponse
    {
        $datos = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'correo' => ['required', 'email', 'max:255', 'unique:cliente,correo'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $cliente = Cliente::create($datos);

        return response()->json([
            'mensaje' => 'Cliente registrado correctamente',
            'cliente' => [
                'id_cliente' => $cliente->id_cliente,
                'nombre' => $cliente->nombre,
                'correo' => $cliente->correo,
            ],
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $cliente = Cliente::findOrFail($id);

        return response()->json($cliente, 200);
    }
}