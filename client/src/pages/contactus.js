import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";

import Footer from "../components/home/footer";
import ContactUsicons from "../components/contactus/iconsec";
import ContactForm from "../components/contactus/fromcontact";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="flex-grow container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">

        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">

          {/* Left Side: Layout for Contact Form */}
          <div className="lg:col-span-8 w-full">
            <ContactForm />
          </div>

          {/* Right Side: Layout for Contact Info */}
          <div className="lg:col-span-4 w-full lg:sticky lg:top-24">
            <ContactUsicons />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
