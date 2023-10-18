
import './App.css';
// import $ from 'jquery';
import Footer from './components/layouts/footer';
import Navbar from './components/layouts/Navbar';
import Event from './components/pages/Events/Events';

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <script src="js/jquery-3.5.1.min.js" type='text/javascript'></script>

        <script src="js/popper.min.js" type='text/javascript'></script>

        <script src="js/bootstrap.min.js" type='text/javascript'></script>

        <script src="vendors/niceselect/js/jquery.nice-select.min.js" type='text/javascript'></script>

        <script src="vendors/owl_carousel/js/owl.carousel.min.js" type='text/javascript'></script>

        <script src="vendors/parallax/jquery.parallax-scroll.js" type='text/javascript'></script>
        <script src="vendors/parallax/parallax.js" type='text/javascript'></script>

        <script src="vendors/wow/wow.min.js" type='text/javascript'/>

        <script src="vendors/isotop/imagesloaded.pkgd.min.js" type='text/javascript'></script>
        <script src="vendors/isotop/isotope.pkgd.js" type='text/javascript'></script>

        <script src="vendors/magnify_popup/jquery.magnific-popup.js" type='text/javascript'></script>

        <script src="js/custom.js" type='text/javascript'></script>
      </Helmet> */}
      <Navbar />
      <Event />
      
      <Footer />

    </div>
  );
}

export default App;
