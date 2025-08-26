


import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import Footer from "../components/home/footer";
import StoryVisionValues from "../components/aboutus/hero";


const AboutUs = () => {
  return (
    <div>
      <Navbar />
     <StoryVisionValues/>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
