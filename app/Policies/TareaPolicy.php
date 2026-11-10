<?php

namespace App\Policies;

use App\Models\Cliente;
use App\Models\Reserva;
use Illuminate\Auth\Access\Response;

class TareaPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(Cliente $cliente): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(Cliente $cliente, Reserva $reserva): bool
    {
        return $cliente->id === $reserva->cliente_id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(Cliente $cliente): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(Cliente $cliente, Reserva $reserva): bool
    {
       return $cliente->id === $reserva->cliente_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Cliente $cliente, Reserva $reserva): bool
    {
        return $cliente->id === $reserva->cliente_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Cliente $cliente, Reserva $reserva): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Cliente $cliente, Reserva $reserva): bool
    {
        return false;
    }
}
