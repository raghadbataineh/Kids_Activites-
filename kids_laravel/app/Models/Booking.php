<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [
        'phone',
        'kidsNum',
        'Total-price',
        'payment_method',
        'event_id',
        'user_id',
    ];
    public function event(){
        return $this->belongsTo(Event::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function bookingkids(){
        return $this->hasMany(BookingKids::class);
    }
}
