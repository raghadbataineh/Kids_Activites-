<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Organizer;

class OrganizersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // You can use the DB::table('organizers') method to insert data into the 'organizers' table.
        
        
        Organizer::create(
            [
               
                'name' => 'Raghad bataineh',
                'image' => 'raghad.jpg',
                'role' => 'artist',
                'experience_year' => 3,
                'phone' => '0790801566',
                'email' => 'raghad.bataineh24@email.com',
                'facebook' => 'https://www.facebook.com/rutooshshop_',
                'instagram' => 'https://www.instagram.com/rutooshshop_/',
                'experience_description' => 'All our preschools have all-weather indoor play areas, an art studio or an atelier, technology corners and much else; and most have outdoor play spaces and even swimming pools specifically for the younger ones.',
            ]

            );
        Organizer::create(
            [
                'name' => 'Razan Rjuob',
                'image' => 'razan.jpg',
                'role' => 'Developer',
                'experience_year' => 2,
                'phone' => '0790865511',
                'email' => 'razanalrjoub101@gmail.com',
                'facebook' => 'https://www.facebook.com/razanrjuob',
                'instagram' => 'https://www.instagram.com/razanrjuob/',
                'experience_description' => 'Im a dedicated developer with a strong foundation in coding and problem-solving. With 4 years of experience, I have contributed to a wide range of projects, from web applications to mobile apps. My expertise lies in front-end and back-end development, and Iam passionate about writing clean, efficient code that brings ideas to life.
                ',            ]
            );
        Organizer::create(
            [
               
                'name' => 'Rania Taha',
                'image' => 'rania.jpg',
                'role' => 'Designer',
                'experience_year' => 4,
                'phone' => '0790865587',
                'email' => 'rania.taha105@gmail.com ',
                'facebook' => 'https://www.facebook.com/raniataha',
                'instagram' => 'https://www.instagram.com/raniataha/',
                'experience_description' => 'I am a passionate designer with over 4 years of experience in creating beautiful and functional designs. My work is driven by creativity, attention to detail, and a strong focus on user-centered design. I specialize in web and graphic design, always striving to deliver visually stunning and user-friendly solutions.
                ',            ]

            );
        Organizer::create(
            [
               
                'name' => 'Mohammed Ghzawie',
                'image' => 'personal_(3).jpg',
                'role' => 'Designer',
                'experience_year' => 4,
                'phone' => '0790865587',
                'email' => 'rmohd.a.ghzawi@gmail.com',
                'facebook' => 'https://www.facebook.com/mohammedghzawie',
                'instagram' => 'https://www.instagram.com/mohammedghzawie/',
                'experience_description' => 'I am a passionate designer with over 4 years of experience in creating beautiful and functional designs. My work is driven by creativity, attention to detail, and a strong focus on user-centered design. I specialize in web and graphic design, always striving to deliver visually stunning and user-friendly solutions.
                ',
            ]

            );
        Organizer::create(
            [
               
                'name' => 'Mohammed Huwarie',
                'image' => 'huwarie.png',
                'role' => 'Developer',
                'experience_year' => 4,
                'phone' => '0790865587',
                'email' => 'rania.taha105@gmail.com ',
                'facebook' => 'https://www.facebook.com/mohammedhuwarie',
                'instagram' => 'https://www.instagram.com/mohammedhuwarie/',
                'experience_description' => 'Im a dedicated developer with a strong foundation in coding and problem-solving. With 4 years of experience, I have contributed to a wide range of projects, from web applications to mobile apps. My expertise lies in front-end and back-end development, and Iam passionate about writing clean, efficient code that brings ideas to life.
                ',
            ]

            );
        Organizer::create(
            [
               
                'name' => 'Malek Sawalha',
                'image' => 'IMG_0353.jpg',
                'role' => 'Instructor',
                'experience_year' => 4,
                'phone' => '0790865587',
                'email' => 'maleksawalha1996@gmail.com',
                'facebook' => 'https://www.facebook.com/maleksawalha',
                'instagram' => 'https://www.instagram.com/maleksawalha/',
                'experience_description' => 'All our preschools have all-weather indoor play areas, an art studio or an atelier, technology corners and much else; and most have outdoor play spaces and even swimming pools specifically for the younger ones.',
            ]

            );
      
    }
};
