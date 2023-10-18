import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/layouts/footer';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home/Home';
import EventDetails from './components/pages/EventDetail/eventDetail';
import Event from './components/pages/Events/Events';
import About from './components/pages/About/about';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/events/:id" element={<Event />} />
          <Route  path="/single/:id" element={<EventDetails />} />
          <Route  path="/About" element={<About />} />

          
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

