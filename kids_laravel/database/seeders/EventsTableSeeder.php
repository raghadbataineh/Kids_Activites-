<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;


class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::create(
            [
               
                'name' => 'Art Adventure: Mini Picasso Workshop',
                'image' => 'http://127.0.0.1:8000/images/events/art.jpeg',
                'short_description' => 'Unleash your childs creativity with a hands-on art workshop!',
                'long_description' => 'Your little artist will explore various art techniques and materials in a playful and engaging environment. They will learn about colors, shapes, and self-expression through art. Our experienced art instructors will guide them in creating their own masterpieces to take home.',
                'date' => '2023-11-12',
                'start_time' => '15:00',
                'end_time' => '17:00',
                'location' => 'Creative Kids Studio, Amman, Jordan',
                'image2' => 'http://127.0.0.1:8000/images/events/artttt.jpeg',
                'price' => '12',
                'category_id' => '1',
                'organize_id' => '1',
                'status' => 'active',

            ]

            );
            Event::create(
                [
                    'name' => 'Storytime Adventures: Magical Tales',
                    'image' => 'http://127.0.0.1:8000/images/events/story1.jpeg',
                    'short_description' => 'Immerse your child in the enchanting world of stories and imagination.',
                    'long_description' => 'Kids will gather for an interactive storytelling session where they can let their imaginations run wild. They will listen to captivating tales, participate in creative activities, and even create their own storybooks. It is a journey into the world of books and storytelling.',
                    'date' => '2023-12-10',
                    'start_time' => '14:30',
                    'end_time' => '16:00',
                    'location' => 'Amman Public Library, Amman, Jordan',
                    'image2' => 'http://127.0.0.1:8000/images/events/story2.jpg',
                    'price' => '8',
                    'category_id' => '1',
                    'organize_id' => '3',
                    'status' => 'active',
                ]
            );
            Event::create(
                [
                    'name' => ' Football Champions : Kids Fun Day',
                    'image' => 'http://127.0.0.1:8000/images/events/fot2.jpg',
                    'short_description' => 'Join us for a day full Football, fun and teamwork of soccer and fun for kids!',
                    'long_description' => 'Bring your little Football stars to our fun-filled soccer event. They will learn basic soccer skills, teamwork, and enjoy friendly matches. Our experienced coaches will ensure a safe and enjoyable environment for all kids. Do nott forget to bring their soccer gear!',
                    'date' => '2023-11-25',
                    'start_time' => '10:00',
                    'end_time' => '12:00',
                    'location' => 'Amman Sports Complex, Amman, Jordan',
                    'image2' => 'http://127.0.0.1:8000/images/events/fot1.jpg',
                    'price' => '12',
                    'category_id' => '2', 
                    'organize_id' => '4',
                    'status' => 'active',
                ]
            );
            Event::create(
                [
                    'name' => 'Nature Safari: Tiny Explorers Adventure',
                    'image' => 'http://127.0.0.1:8000/images/events/zooo.jpg',
                    'short_description' => 'Let your little ones embark on a nature adventure!',
                    'long_description' => 'Get ready for an exciting nature safari. Kids will explore the beauty of the outdoors, learn about local flora and fauna, and go on a mini adventure to discover insects, plants, and more. Our experienced naturalists will guide them through this educational and fun expedition, fostering a love for the environment.',
                    'date' => '2024-01-10',
                    'start_time' => '11:00',
                    'end_time' => '13:00',
                    'location' => 'Amman Nature Reserve, Amman, Jordan',
                    'image2' => 'http://127.0.0.1:8000/images/events/zoo1.jpg',
                    'price' => '12',
                    'category_id' => '1',
                    'organize_id' => '2',
                    'status' => 'active',
                ]
            );
            Event::create(
                [
                    'name' => 'Young Chefs Cooking Workshop',
                    'image' => 'http://127.0.0.1:8000/images/events/cook1.jpg',
                    'short_description' => 'A fun and educational cooking experience for young chefs!',
                    'long_description' => 'Calling all young chefs! Join us for an exciting cooking workshop where kids aged 6 to 9 can learn the basics of cooking, kitchen safety, and creating delicious dishes. They will get hands-on experience preparing simple and tasty recipes while having a blast in the kitchen. Our experienced chefs will guide them every step of the way.',
                    'date' => '2024-02-18',
                    'start_time' => '14:00',
                    'end_time' => '16:00',
                    'location' => 'Amman Culinary School, Amman, Jordan',
                    'image2' => 'http://127.0.0.1:8000/images/events/cook2.jpg',
                    'price' => '15',
                    'category_id' => '2', 
                    'organize_id' => '5',
                    'status' => 'active',
                ]
            );
            Event::create(
                [
                    'name' => 'Music & Movement: Little Rhythm Makers',
                    'image' => 'http://127.0.0.1:8000/images/events/music1.jpeg',
                    'short_description' => 'An interactive music and movement experience for young kids!',
                    'long_description' => 'Introduce your little ones to the world of music and rhythm. Children aged 3 to 5 will participate in a lively and interactive music and movement session. They will learn about different instruments, dance to the beat, and explore the joy of making music. Our experienced music instructors will guide them in this fun and educational adventure.',
                    'date' => '2024-07-10',
                    'start_time' => '10:30',
                    'end_time' => '12:00',
                    'location' => 'Amman Music Academy, Amman, Jordan',
                    'image2' => 'http://127.0.0.1:8000/images/events/music2.jpg',
                    'price' => '15',
                    'category_id' => '1', 
                    'organize_id' => '1',
                    'status' => 'active',
                ]
            );
            Event::create(
                [
                    'name' => 'Youth Adventure Camp: Wilderness Explorers',
                    'image' => 'http://127.0.0.1:8000/images/events/cam1.jpg',
                    'short_description' => 'An exciting camping adventure full of new activites',
                    'long_description' => 'Calling all young adventurers! Join us for a thrilling camping experience in the great outdoors. Youth aged 11 to 15 will embark on a wilderness expedition, learning survival skills, setting up tents, and exploring the beauty of nature. Our experienced camp leaders will guide them through this exciting and educational journey under the stars.',
                    'date' => '2023-11-20',
                    'start_time' => '10:00',
                    'end_time' => '16:00',
                    'location' => 'Amman Wilderness Reserve, Amman, Jordan',
                    'image2' => 'http://127.0.0.1:8000/images/events/cam2.jpg',
                    'price' => '22',
                    'category_id' => '3', 
                    'organize_id' => '6',
                    'status' => 'active',
                ]
            );
            
            
            
            
    }
}
