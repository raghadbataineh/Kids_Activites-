// import { Helmet } from 'react-helmet';
import './App.css';
import Footer from './components/layouts/footer';
import Navbar from './components/layouts/Navbar';
import Teacher from './components/pages/Teacher/Teacher'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

import Teacher_Details from './components/pages/TeacherDetails/TeacherDetails';


function App() {
  return (
    <Router>
          <Navbar />
          {/* <Teacher /> */}

    <Routes>
    <Route path="/" element={<Teacher />} />
        <Route path="/teacher_details/:id" element={<Teacher_Details />} />
    </Routes>
    <Footer />

  </Router>
);
    // <div className="App">
    //    <Navbar />
    //    <Teacher_Details />   
    //   <Footer />
    // </div>
  
}

export default App;
