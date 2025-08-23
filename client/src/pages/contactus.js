import React, { useState } from "react";
import Navbar from "../components/home/Navbar";


import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";

import Footer from "../components/home/footer";
import ContactUsicons from "../components/contactus/iconsec";
import ContactForm from "../components/contactus/fromcontact";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
          <ContactUsicons />
          <ContactForm/>
      <Footer />
    </div>
  );
};

export default ContactUs;
