<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizer extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'image',
        'role',
        'experience_year',
        'phone',
        'facebook',
        'instagram',
        'experience_description',
    ];
    public function event(){
        return $this->hasMany(Event::class);
    }
}
