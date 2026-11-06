<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reserva extends Model
{
    protected $table = 'reservas';
    protected $primaryKey = 'id_reservas';

    protected $fillable = [
        'id_cliente',
        'id_mesa',
        'fecha_reserva',
        'hora_reserva',
        'estado',
        'notas'
    ];

    // La reserva pertenece a un cliente
    public function cliente(): BelongsTo
    {
        return $this->belongsTo(Cliente::class, 'id_cliente', 'id_cliente');
    }

    // La reserva pertenece a una mesa
    public function mesa(): BelongsTo
    {
        return $this->belongsTo(Mesa::class, 'id_mesa', 'id_mesa');
    }
}
