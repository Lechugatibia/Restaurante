<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $datos = $request->validate([
            'correo' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $cliente = Cliente::where(
            'correo',
            $datos['correo']
        )->first();

        if (
            !$cliente ||
            !$cliente->password ||
            !Hash::check($datos['password'], $cliente->password)
        ) {
            return response()->json([
                'mensaje' => 'Correo o contraseña incorrectos',
            ], 401);
        }

        $token = $cliente->createToken('token-restaurante')->plainTextToken;

        return response()->json([
            'mensaje' => 'Inicio de sesión exitoso',
            'usuario' => [
                'id_cliente' => $cliente->id_cliente,
                'nombre' => $cliente->nombre,
                'correo' => $cliente->correo,
            ],
            'token' => $token,
        ], 200);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'mensaje' => 'Sesión cerrada correctamente',
        ], 200);
    }
}