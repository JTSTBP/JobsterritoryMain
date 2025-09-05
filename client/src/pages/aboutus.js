import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import Footer from "../components/home/footer";
import StoryVisionValues from "../components/aboutus/hero";
import Stats from "../components/aboutus/stats";
import VisionCard from "../components/aboutus/visioncard";
import FAQSection from "../components/home/faqs";

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
const faqData = [
  {
    question: "What industries do you specialize in?",
    icon: "/images/faq1.png",
    answer:
      "We cater to a wide range of industries including e-commerce, fashion, FMCG, healthcare, technology, and more—helping businesses of all sizes find the right talent.",
  },
  {
    question: "Do you only work with large companies?",
    icon: "/images/faq2.png",
    answer:
      "No. We provide recruitment solutions for startups, SMEs, and enterprises—tailored to each client’s unique needs.",
  },
  {
    question: "How do you ensure the right candidate fit?",
    icon: "/images/faq3.png",
    answer:
      "We go beyond résumés by assessing skills, cultural alignment, and long-term potential to ensure every hire adds value to your business.",
  },
  {
    question: "What services do you offer for businesses?",
    icon: "/images/faq4.png",
    answer:
      "We provide end-to-end recruitment, leadership hiring, recruiter-as-a-service (RAAS), and customized hiring models designed to scale with your business.",
  },
  {
    question: "How do you support job seekers?",
    icon: "/images/faq5.png",
    answer:
      "We guide professionals to roles that match their skills, goals, and career aspirations—helping them achieve long-term growth and success.",
  },
  {
    question: "What makes you different from other recruitment agencies?",
    icon: "/images/faq6.png",
    answer:
      "Our people-first approach, speed of delivery, and proven track record (15,000+ hires, 500+ leadership roles) set us apart.",
  },
  {
    question: "Do you provide recruitment support outside India?",
    icon: "/images/faq7.png",
    answer:
      "Yes, we cover multiple locations and support global hiring needs depending on client requirements.",
  },
  {
    question: "How quickly can you fill a position?",
    icon: "/images/faq8.png",
    answer:
      "With a strong talent pool and expert recruiters, we can close critical positions in as little as 72 hours (depending on role and complexity).",
  },
  {
    question: "What is your commitment to clients?",
    icon: "/images/faq9.png",
    answer:
      "We prioritize quality, precision, and long-term fit—ensuring every hire contributes to organizational growth.",
  },
  {
    question: "How can I get started with you?",
    icon: "/images/faq10.png",
    answer:
      "Simply reach out through our contact page. Our team will understand your requirements and guide you through the next steps.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <StoryVisionValues />
      <Stats stats={stats} />
      <VisionCard />
      <Stats stats={stats2} />
      <FAQSection faqData={faqData} />
      <Footer />
    </div>
  );
};

export default AboutUs;
