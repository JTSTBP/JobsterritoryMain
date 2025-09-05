import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";
import CaseStudiesMain from "../components/casestudies/mainsection";
import Footer from "../components/home/footer";

const CaseStudy = () => {
  return (
    <div>
      <Navbar />
      <CaseStudiesMain />
      <Footer />
    </div>
  );
};

export default CaseStudy;
