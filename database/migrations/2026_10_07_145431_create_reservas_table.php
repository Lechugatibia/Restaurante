<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('reservas', function (Blueprint $table) {
    $table->id('id_reservas'); 
    $table->foreignId('id_cliente')->constrained('cliente', 'id_cliente')->onDelete('cascade');
    $table->foreignId('id_mesa')->constrained('mesas', 'id_mesa')->onDelete('cascade');
    
    $table->date('fecha_reserva');
    $table->time('hora_reserva');
    $table->string('estado')->default('pendiente'); // Ejemplo: pendiente, confirmada, cancelada
    $table->text('notas')->nullable(); // Nullable por si el cliente no deja notas
    
    $table->timestamps(); // Registra cuándo se creó y modificó la reserva
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservas');
    }
};
