<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create(
            ['id'=> '1',
                'name' => 'Preschoolers',
                'image' => 'http://127.0.0.1:8000/images/category/category1.jpg',
                'short_description' => 'Join us for a memorable journey. Our fun, creative Events designed especially for preschoolers.',
                'long_description' => 'Our events designed for curious and energetic preschoolers aged 3-5. We provide a safe and nurturing environment where children can engage in a variety of age-appropriate activities. These events includes interactive games, simple science experiments, arts and crafts, and storytelling sessions. It is a fantastic way for your child to develop social skills, creativity, and a love for learning while having loads of fun with their peers. Join us for a memorable journey of exploration!',
                'age' => '3-5'
            ]
            

            );
            Category::create(
                [
                    'id'=> '2',
                    'name' => 'Schoolers',
                    'image' => 'http://127.0.0.1:8000/images/category/cat.png',
                    'short_description' => ' join us in a journey of exploration, teamwork, and outdoor Events especially for choolers.',
                    'long_description' => 'Our Events designed for elementary children aged 6-9. We believe in the power teamwork, resilience, and a sense of wonder. They wll learn valuable skills such as orienteering, basic wilderness survival, and environmental stewardship. Our trained staff ensures a safe and engaging environment where young adventurers can create lasting memories while developing a deep appreciation for the natural world.',
                    'age' => '6-9'
                ]
                
    
                );
                Category::create(
                    [
                        'id'=> '3',
                        'name' => 'Junior Explorers',
                        'image' => 'http://127.0.0.1:8000/images/category/cat3.jpg',
                        'short_description' => 'Join us in our Ideal Events setting for tweens to grow, explore and create life memories',
                        'long_description' => 'Our Events provide unforgettable experience designed for tweens aged 10-13. They are all about adventure, teamwork, and the great experiences.They will learn important life skills, develop leadership qualities, and build lasting friendships. With trained counselors and a focus on safety, these events provides an ideal setting for tweens to grow, explore, and create lifelong memories.',
                        'age' => '11-15'
                    ]
                    
        
                    );
    }
}



