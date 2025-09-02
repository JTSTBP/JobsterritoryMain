


import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import Footer from "../components/home/footer";
import StoryVisionValues from "../components/aboutus/hero";
import Stats from "../components/aboutus/stats";
import VisionCard from "../components/aboutus/visioncard";

 const stats = [
   { number: "15000+", label: "Successful Hires" },
   { number: "100%", label: "Service Commitment" },
   { number: "500+", label: "Leadership Roles Closed" },
   { number: "20+", label: "Locations Covered" },
];
  const stats2 = [
    { number: "24-48", label: "Hours Turnaround" },
    { number: "500+", label: "Happy Clients " },
    { number: "100+", label: " Recruitment Specialists " },
    { number: "98%", label: "Client Retention Rate " },
  ];
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <StoryVisionValues />
      <Stats stats={stats} />
      <VisionCard />
      <Stats stats={stats2} />
      <Footer />
    </div>
  );
};

export default AboutUs;
