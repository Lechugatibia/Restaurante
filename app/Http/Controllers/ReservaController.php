<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ReservaController extends Controller
{
    public function index(Request $request)
    {
        $consulta = Reserva::query();

        if ($request->filled('estado')) {
            $consulta->where('estado', $request->estado);
        }

        if ($request->filled('id_cliente')) {
            $consulta->where('id_cliente', $request->id_cliente);
        }

        if ($request->filled('fecha_reserva')) {
            $consulta->where('fecha_reserva', $request->fecha_reserva);
        }

        $reservas = $consulta->orderBy('id_reservas', 'desc')
            ->paginate($request->integer('por_pagina', 50));

        return response()->json($reservas, 200);
    }

    public function store(Request $request)
    {
        $datos = $request->validate([
            'id_cliente' => ['prohibited'],
            'id_mesa' => ['required', 'exists:mesas,id_mesa'],
            'nombre_completo' => ['required', 'string', 'max:255'],
            'correo' => ['required', 'email', 'max:255'],
            'numero_personas' => ['required', 'integer', 'min:1'],
            'fecha_reserva' => ['required', 'date'],
            'hora_reserva' => ['required', 'date_format:H:i'],
            'estado' => ['required', 'string', 'max:255'],
            'notas' => ['nullable', 'string', 'max:255'],
        ]);
        $datos['id_cliente'] = $request->user()->id_cliente;

        $reserva = Reserva::create($datos);

        return response()->json($reserva, 201);
    }

    public function show(Reserva $reserva)
    {
        Gate::authorize('view', $reserva);
        return response()->json($reserva, 200);
    }

    public function update(Request $request, Reserva $reserva)
    {
        Gate::authorize('update', $reserva);
        $datos = $request->validate([
            'id_cliente' => ['prohibited'],
            'id_mesa' => ['sometimes', 'required', 'exists:mesas,id_mesa'],
            'nombre_completo' => ['sometimes', 'required', 'string', 'max:255'],
            'correo' => ['sometimes', 'required', 'email', 'max:255'],
            'numero_personas' => ['sometimes', 'required', 'integer', 'min:1'],
            'fecha_reserva' => ['sometimes', 'required', 'date'],
            'hora_reserva' => ['sometimes', 'required', 'date_format:H:i'],
            'estado' => ['sometimes', 'required', 'string', 'max:255'],
            'notas' => ['sometimes', 'nullable', 'string', 'max:255'],
        ]);

        $reserva->update($datos);

        return response()->json($reserva->fresh(), 200);
    }

    public function destroy(Reserva $reserva)
    {
        Gate::authorize('delete', $reserva);
        $reserva->delete();

        return response()->json(null, 204);
    }
}
