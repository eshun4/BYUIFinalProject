import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowcase from './CategoryShowcase';
import Register from './Register';
import LocationSpread from './LocationSpread';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';
// import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowcase/>
      <Register/>
      <LocationSpread/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
    </div>
    
  )
}

export default Home