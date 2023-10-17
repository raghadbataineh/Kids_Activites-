<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'image',
        'short_description',
        'long_description',
        'age'
    ];
    public function event(){
        return $this->hasMany(Event::class);
    }
}
