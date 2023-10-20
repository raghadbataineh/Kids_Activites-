import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/layouts/footer';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home/Home';
import EventDetails from './components/pages/EventDetail/eventDetail';
import Event from './components/pages/Events/Events';
import About from './components/pages/About/about';
import Teacher from './components/pages/Teacher/Teacher'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Teacher_Details from './components/pages/TeacherDetails/TeacherDetails';
import Register from './components/pages/login_register/register';
import Login from './components/pages/login_register/login';
import Contact from './components/pages/contact/contact';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/single/:id" element={<EventDetails />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher_details/:id" element={<Teacher_Details />} />
        <Route path="/About" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

