import React from "react";
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Footer from '../components/Footer'
  
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
};

  
export default Home;