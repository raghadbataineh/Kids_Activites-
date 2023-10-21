<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(
            [

                'first_name' => 'Raghad',
                'last_name' => ' bataineh',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'raghad@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/raghad.jpg',
                'Role'=> 'user',
            ]
        );

        User::create(
            [

                'first_name' => 'Razan',
                'last_name' => ' rjoub',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'razan@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/razan.jpg',
                'Role'=> 'user',
            ]
        );
        User::create(
            [

                'first_name' => 'Rania',
                'last_name' => 'Taha',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'Rania@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/Rania.jpg',
                'Role'=> 'user',
            ]
        );

        User::create(
            [

                'first_name' => 'mohammed',
                'last_name' => 'moh',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'mohammed1@email.com',
                'image' => 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
                'Role'=> 'user',
            ]
        );
        User::create(
            [

                'first_name' => 'ahmad',
                'last_name' => 'moh',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'ahmad@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/default.png',
                'Role'=> 'user',
            ]
        );
        User::create(
            [

                'first_name' => 'ali',
                'last_name' => 'moh',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'ali@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/default.png',
                'Role'=> 'user',
            ]
        );
        User::create(
            [

                'first_name' => 'mohammed',
                'last_name' => 'Ghzawie',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'mohammed4@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/personal_(3).jpg',
                'Role'=> 'user',
            ]
        );
        User::create(
            [

                'first_name' => 'mohammed',
                'last_name' => 'Huwarie',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'mohammed@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/Huwarie.png',
                'Role'=> 'user',
            ]
        );
        User::create(
            [

                'first_name' => 'malek',
                'last_name' => 'Sawalha',
                'password' => Hash::make('Razan1234$'),
                'phone' => '0790801566',
                'email' => 'malek@email.com',
                'image' => 'http://127.0.0.1:8000/images/Users/IMG_0353.jpg',
                'Role'=> 'user',
            ]
        );
    }
}
