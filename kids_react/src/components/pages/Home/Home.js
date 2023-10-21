import React from 'react';
import Banner from './Sections/banner';
// import CounterSection from './Sections/count'; 
import Gallery from './Sections/gallery';
import FeaturesPart from './Sections/feature'; 
import Services from './Sections/service'; 
import CtaSection from './Sections/teampart'; 


const Home = () => {
  sessionStorage.setItem('current',window.location.pathname);
  return (
    <div>
      
      <Banner />
      <Services />
      {/* <CounterSection /> */}
      <FeaturesPart />
     <Gallery />
      <CtaSection />
    </div>
  );
};

export default Home;

