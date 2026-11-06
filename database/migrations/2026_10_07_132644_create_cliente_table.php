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
      Schema::create('cliente', function (Blueprint $table) {
    $table->id('id_cliente'); // Llave primaria personalizada como tu diagrama
    $table->string('nombre'); 
    $table->string('correo')->unique();
    $table->timestamps(); // Crea automáticamente created_at y updated_at
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cliente');
    }
};
