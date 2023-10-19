<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'password',
        'image',
        'start_time',
        'short_description',
        'long_description',
        'date',
        'end_time',
        'location',
        'image2',
        'price',
        'category_id',
        'organize_id',
        'status',
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function organizer(){
        return $this->belongsTo(Organizer::class,'organize_id');
    }
}
