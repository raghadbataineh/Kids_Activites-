import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/layouts/footer';
import Navbar from './components/layouts/Navbar';
import Register from './components/pages/login_register/register';
import Login from './components/pages/login_register/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Login />

        <Routes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
