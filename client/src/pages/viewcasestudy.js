import React, { useState } from "react";

import Footer from "../components/home/footer";
import CaseStudyCard from "../components/casestudies/viewCaseStudy";
import HireSection from "../components/commonsections/ready";

const ViewCaseStudy = () => {
  return (
    <div>
      <CaseStudyCard />
      <HireSection
        title="Ready to Transform "
        highlight="Your Hiring Process ?"
        description="Let our Expert Recruiters help you implement these strategies and find the perfect talent for  
                                                                             your Organization"
        buttonText="Start Hiring Now"
        buttontext2="Schedule Consltation"
        backgroundImage="/images/trasfrom.png"
      />
    </div>
  );
};

export default ViewCaseStudy;
