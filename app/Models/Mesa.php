<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Mesa extends Model
{
    protected $table = 'mesas';
    protected $primaryKey = 'id_mesa';
    protected $fillable = ['num_mesa', 'capacidad', 'ubicacion'];

    // Relación: Una mesa puede estar en muchas reservas (1 a N)
    public function reservas(): HasMany
    {
        return $this->hasMany(Reserva::class, 'id_mesa', 'id_mesa');
    }
}
