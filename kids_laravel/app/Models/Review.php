<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'image',
        'event_id',
        'comment',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
