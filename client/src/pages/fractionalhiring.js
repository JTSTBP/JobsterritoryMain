import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Bannersection from "../components/commonsections/bannersection";

import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";
import Whysection from "../components/fractionalhiring/whatsection";
import ProjectBasedWorkCard from "../components/fractionalhiring/usecases";
import Footer from "../components/home/footer";
import BenefitsCard from "../components/fractionalhiring/benifits";
import HireSection from "../components/commonsections/ready";
import FAQSection from "../components/home/faqs";
import BlogsSection from "../components/commonsections/staticblogs";

const faqData = [
  {
    question: "What is Fractional Hiring?",
    icon: "/images/f1.png",
    answer:
      "Fractional Hiring allows businesses to hire experts and professionals on a part-time, project-based, or flexible basis instead of committing to full-time roles.",
  },
  {
    question: "Who should use Fractional Hiring?",
    icon: "/images/f2.png",
    answer:
      "Startups, SMEs, and fast-growing businesses needing expertise but not ready for a full-time hire.",
  },
  {
    question: "What roles are best suited for Fractional Hiring?",
    icon: "/images/f3.png",
    answer:
      "Leadership roles (CFO, CMO, CHRO), consultants, project managers, and domain experts in tech, HR, finance, and operations.",
  },
  {
    question: "How does Fractional Hiring save costs?",
    icon: "/images/f4.png",
    answer:
      "You pay only for the time and expertise you need—helping you save up to 40% compared to full-time hires.",
  },
  {
    question: "Can fractional hires work remotely?",
    icon: "/images/f5.png",
    answer:
      "Yes, we provide both remote and hybrid options depending on your business needs.",
  },
  {
    question: "Is there a minimum duration for fractional hiring?",
    icon: "/images/f6.png",
    answer:
      "No strict minimum—engagements can range from a few hours a week to months-long projects.",
  },
  {
    question: "How does Jobs Territory ensure quality in Fractional Hiring?",
    icon: "/images/f7.png",
    answer:
      "All professionals are pre-vetted, industry-experienced, and aligned with your specific project requirements.",
  },
  {
    question: "What if I need to convert a fractional hire to full-time?",
    icon: "/images/fh8.png",
    answer:
      "We offer seamless conversion options if you decide to bring fractional talent on board permanently.",
  },
  {
    question: "Is Fractional Hiring only for short-term needs?",
    icon: "/images/fh9.png",
    answer:
      "Not at all—many businesses use it for ongoing advisory or strategic roles where full-time commitment isn’t required.",
  },
  {
    question: "Why choose Jobs Territory for Fractional Hiring?",
    icon: "/images/fh10.png",
    answer:
      "Because we deliver top-tier experts on-demand, ensuring flexibility, agility, and cost-effectiveness without compromising quality.",
  },
];
 const blogs = [
   {
     id: 1,
     title: "how-to-attract-and-retain-top-c-suite-talent",
     image: "/images/blogsimg1.png",
   },
   {
     id: 2,
     title: "importance-of-executive-search-for-c-suite-ro",
     image: "/images/blogsimg.png",
     bg: "#1B084C",
   },
   {
     id: 3,
     title: "c-suite-hiring-trends-in-tech-healthcare",
     image: "/images/blogimg1.png",
   },
   {
     id: 4,
     title: "importance-of-executive-search-for-c-suite-ro",
     image: "/images/blogsimgsh1.png",
     bg: "#1B084C",
   },
   {
     id: 5,
     title: "how-to-attract-and-retain-top-c-suite-talent",
     image: "/images/blogimg2.png",
   },
   {
     id: 6,
     title: "importance-of-executive-search-for-c-suite-ro",
     image: "/images/blogsimgsh2.png",
     bg: "#1B084C",
   },
 ];

const FractionalHiring = () => {
  return (
    <div>
      <Navbar />
      <Bannersection
        backgroundImage="/images/exbg3.png"
        heading="Your Growth Accelerator, On Demand"
        heading1="Fractional Hiring"
        paragraph="When projects can’t wait months for leadership, we connect you with battle-tested industry experts who deliver measurable impact within days — without the cost or commitment of full-time hires."
        primaryButtonText="Explore"
        secondrybuttontext="Book a call"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <Whysection />
      <ProjectBasedWorkCard />
      <BenefitsCard />
      <BlogsSection blogs={blogs} />
      <HireSection
        title="Ready to See Impact in Weeks, "
        highlight=" Not Months?"
        description="Let’s bring in a leader who can accelerate growth, solve high-stake challenges, or execute critical projects — exactly when you need them.
"
        buttonText="Start Fractional Hiring"
        backgroundImage="/images/trasfrom.png"
      />
      <FAQSection faqData={faqData} />
      <Footer />
    </div>
  );
};

export default FractionalHiring;
