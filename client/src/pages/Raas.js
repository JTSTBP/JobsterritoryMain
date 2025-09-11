import React, { useState } from "react";

import Bannersection from "../components/Raas/banner";

import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";
import WhychooseRaas from "../components/Raas/whychoose";
import HowItWorks from "../components/Raas/howitworks";
import RaaSCarousel from "../components/Raas/carousel";

import AboutJobsTerritory from "../components/Raas/about";
import BlogsSection from "../components/commonsections/staticblogs";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer";
import FAQSection from "../components/Raas/faqs";
import IndustriesGrid from "../components/Raas/industries";
import HiringComparison from "../components/Raas/hiringmode";

const industries = [
  {
    title: "Practo",
    description:
      "How Jobs Territory Helped Practo Hire 42 Healthcare Professionals in Just 2 Months (2021)",
    placements: "2000+",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/casimg1.jpg",
    slug: "practo",
  },
  {
    title: "Vogo",
    description:
      "How Jobs Territory Helped Vogo Hire 50+ Customer Support Team Members in 2 Months",
    placements: "800+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg4.jpg",
    slug: "vogo",
  },
  {
    title: "Unacademy",
    description:
      "How Jobs Territory Helped Unacademy Close 84 Business Development Positions in February 2022",
    placements: "700+",
    placements: "1500+",
    bg: "images/bg2.png",
    text: "text-[#FFFFFF]",
    slug: "unacademy",
    img: "/images/casimg7.png",
  },
  {
    title: "Medvarsity",
    description:
      "How Jobs Territory Helped Medvarsity Hire 60+ Academic Counselors in Just 3 Months (2021)",
    placements: "1000+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg2.png",
    slug: "medvarsity",
  },
  {
    title: "PagarBook",
    description:
      "How Jobs Territory Helped PagarBook Hire 81+ Professionals to Power Rapid Expansion",
    placements: "1200+",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/casimg5.jpg",
    slug: "pagarbook",
  },

  {
    title: "Brandstudio",
    description:
      "How Jobs Territory Helped Brandstudio Hire 28+ Professionals to Power Creative Growth",
    placements: "1500+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg8.jpg",
    slug: "brandstudio",
  },
  {
    title: "Urban Ladder",
    description:
      "How Jobs Territory Helped Urban Ladder Hire 25+ Retail and Customer Support Professionals",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    large: true,
    img: "/images/casimg3.jpg",
    slug: "urban-ladder",
  },
  {
    title: "FloBiz",
    description:
      "How Jobs Territory Helped FloBiz Hire 150+ Business Development Executives in FY 2021-2022",
    placements: "500+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg6.png",
    slug: "flobiz",
  },
  {
    title: "Zepto",
    description:
      "How Jobs Territory Helped Zepto Close 25 Super Store Manager Positions in Less Than 20 Days",
    placements: "500+",

    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/casimg9.png",
    slug: "zepto",
  },
];

const faqData = [
  {
    question: "What is RAAS (Recruiter-as-a-Service)?",
    icon: "/images/f1.png",
    answer:
      "RAAS is a flexible recruitment subscription where Jobs Territory becomes your extended hiring team. You pay a fixed monthly cost and get unlimited hiring support without extra fees per candidate.",
  },
  // {
  //   question: "How does RAAS differ from Pay Per Hire?",
  //   icon: "/images/f2.png",
  //   answer:
  //     "In Pay Per Hire, you pay per successful placement. In RAAS, you pay a flat monthly fee for unlimited roles, making it cost-effective for fast-scaling businesses.",
  // },
  {
    question: "What are the main benefits of RAAS?",
    icon: "/images/f3.png",
    answer:
      "Fixed monthly cost, unlimited hiring, lightning-fast deployment (within 72 hours), and up to 40% savings compared to in-house hiring.",
  },
  {
    question: "Is there a limit on the number of hires under RAAS?",
    icon: "/images/f4.png",
    answer:
      "No limits at all. With RAAS, you can hire as many roles as needed during the subscription period at zero extra cost.",
  },
  {
    question: "Can RAAS handle bulk and niche roles together?",
    icon: "/images/f5.png",
    answer:
      "Yes, our team manages both volume hiring and specialized executive searches under the same subscription.",
  },
  {
    question: "Is RAAS suitable for startups and growing businesses?",
    icon: "/images/f6.png",
    answer:
      "Absolutely. Startups love RAAS because it gives them predictable costs, unlimited hires, and flexibility to scale without hiring an in-house HR team.",
  },
  {
    question: "How much does RAAS cost?",
    icon: "/images/f7.png",
    answer:
      "RAAS Unlimited starts at ₹2,00,000/month. Custom RAAS Enterprise plans (₹3–5L/month) are available for larger teams.",
  },
  {
    question: "How fast can RAAS start delivering results?",
    icon: "/images/f1.png",
    answer:
      "We can deploy a dedicated recruiter/team and start hiring for you within 72 hours of signup.",
  },
  {
    question: "Does RAAS include onboarding and management support?",
    icon: "/images/f2.png",
    answer:
      "Yes, RAAS covers hiring, onboarding, and candidate management to make the process completely seamless.",
  },
  {
    question: "Why choose Jobs Territory’s RAAS model?",
    icon: "/images/f3.png",
    answer:
      "Because you get unlimited hires at a fixed cost, faster scaling, DEI-aligned recruitment, and a trusted hiring partner that grows with your business.",
  },
];

const blogs = [
  {
    id: 1,
    title: "RAAS smarter hiring with best recruitment",
    slug: "raas-smarter-hiring-with-best-recruitment",
    image: "/images/blogsimg1.png",
  },
  {
    id: 2,
    title: "Scale without overloading HR RAAS explained",
    slug: "scale-without-overloading-hr-raas-explained",
    image: "/images/blogsh1.png",
    bg: "#1B084C",
  },
  {
    id: 3,
    title: "How RAAS transforms your hiring process",
    slug: "how-raas-transforms-your-hiring-process",
    image: "/images/blogimg1.png",
  },
  {
    id: 4,
    title: "Why RAAS is the secret weapon for startup",
    slug: "why-raas-is-the-secret-weapon-for-startup",
    image: "/images/blogsh2.png",
    bg: "#1B084C",
  },
  {
    id: 5,
    title: "How RAAS helps startup build dream teams fast",
    slug: "how-raas-helps-startup-build-dream-teams-fast",
    image: "/images/blogimg2.png",
  },
  {
    id: 6,
    title: "5 signs your company needs RAAS now",
    slug: "5-signs-your-company-needs-raas-now",
    image: "/images/blogsh3.png",
    bg: "#1B084C",
  },
];

const RaasPage = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Bannersection
        backgroundImage="/images/exbg1.png"
        heading="Unlimited Hiring. "
        heading1="One Flat Monthly Fee."
        paragraph="2 recruiters + 1 account manager dedicated to you. Pre-screened candidates in 72 hrs. Unlimited roles. Unlimited closures."
        features={[
          { icon: <Users size={18} />, text: "Expert Recruiters" },
          { icon: <TrendingUp size={18} />, text: "Fast Turnaround" },
          { icon: <Target size={18} />, text: "Perfect match" },
          { icon: <Award size={18} />, text: "Quality Assured" },
        ]}
        primaryButtonText="Book a Discovery Call"
        secondrybuttontext="Get Sample Profiles"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <WhychooseRaas />
      <HowItWorks />
      <HiringComparison/>
      <RaaSCarousel />
      <AboutJobsTerritory />

      <IndustriesGrid industries={industries} separate="true" />
      <BlogsSection blogs={blogs} />
      <FAQSection faqData={faqData} />

      <Footer />
    </div>
  );
};

export default RaasPage;
