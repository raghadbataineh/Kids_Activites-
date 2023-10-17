<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingKids extends Model
{
    
    use HasFactory;
    protected $fillable = [
        'booking_id',
        'age',
        'name',

    ];
    public function booking(){
        return $this->belongsTo(Booking::class);
    }
    
}
