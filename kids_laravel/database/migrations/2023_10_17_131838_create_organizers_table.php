<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('image');
            $table->string('role');
            $table->bigInteger('experience_year');
            $table->string('phone');
            $table->string('email');
            $table->text('facebook')->nullable();
            $table->text('instagram')->nullable();
            $table->text('experience_description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizers');
    }
};
