import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Bannersection from "../components/commonsections/bannersection";
import WhyChoosePayPerHire from "../components/PayPerHire/whychoose";
import PayPerHireProcess from "../components/PayPerHire/process";
import Footer from "../components/home/footer";
import FAQSection from "../components/home/faqs";
import BlogsSection from "../components/commonsections/staticblogs";

const faqData = [
  {
    question: "What is Pay Per Hire recruitment?",
    icon: "/images/f1.png",
    answer:
      "Pay Per Hire is a traditional recruitment model where you only pay once we successfully fill a position with the right candidate.",
  },
  {
    question: "How does Jobs Territory’s Pay Per Hire service work?",
    icon: "/images/f2.png",
    answer:
      "We source, screen, and present qualified candidates. Once you select and onboard a candidate, you pay the agreed placement fee.",
  },
  {
    question: "What types of roles can I hire under Pay Per Hire?",
    icon: "/images/f3.png",
    answer:
      "From entry-level to leadership roles across industries like e-commerce, FMCG, fashion, healthcare, and more.",
  },
  {
    question: "Is there a guarantee period for new hires?",
    icon: "/images/f4.png",
    answer:
      "Yes, we offer a replacement guarantee within a specific time frame if the candidate leaves or doesn’t perform as expected.",
  },
  {
    question: "What makes Pay Per Hire cost-effective?",
    icon: "/images/f5.png",
    answer:
      "You only pay when the role is filled, ensuring no upfront costs and zero risk.",
  },
  {
    question: "How fast can Jobs Territory fill a role under this model?",
    icon: "/images/f6.png",
    answer:
      "Depending on the role and industry, we usually close positions within 7–15 business days.",
  },
  {
    question: "Can I hire multiple roles at the same time?",
    icon: "/images/f7.png",
    answer: "Absolutely, we support bulk hiring needs for growing companies.",
  },
  {
    question: "What if I don’t like the candidates presented?",
    icon: "/images/f1.png",
    answer:
      "We continue sourcing until we find candidates that match your expectations.",
  },
  {
    question: "Do you support niche or specialized roles under Pay Per Hire?",
    icon: "/images/f2.png",
    answer:
      "Yes, our team has expertise in closing highly specialized and leadership positions.",
  },
  {
    question: "Why choose Jobs Territory for Pay Per Hire?",
    icon: "/images/f3.png",
    answer:
      "We combine speed, industry expertise, and DEI-focused recruitment to deliver the right talent without compromise.",
  },
];
 const blogs = [
   {
     id: 1,
     title: "pay-per-hire-a-fix-for-costly-hiring",
     image: "/images/blogsimg1.png",
   },
   {
     id: 2,
     title: "pay-per-hire-smarter-hiring-better-roi",
     image: "/images/blogsimg.png",
     bg: "#1B084C",
   },
   {
     id: 3,
     title: "fast-hiring-no-upfront-fees",
     image: "/images/blogimg1.png",
   },
   {
     id: 4,
     title: "pay-per-hire-trend-or-future-of-hiring",
     image: "/images/blogsimgsh1.png",
     bg: "#1B084C",
   },
   {
     id: 5,
     title: "is-pay-per-hire-changing-recruitment-forever",
     image: "/images/blogimg2.png",
   },
   {
     id: 6,
     title: "how-pay-per-hire-can-cut-hiring-costs-by-50percent",
     image: "/images/blogsimgsh2.png",
     bg: "#1B084C",
   },
 ];

const PayperHire = () => {
  return (
    <div>
      <Navbar />
      <Bannersection
        backgroundImage="/images/heropph.png"
        heading="Pay Per Hire  "
        heading1="Talent Without the Risk"
        paragraph="Hire with confidence — you pay only for successful placements. No upfront costs, no hidden fees, no ongoing commitments."
        primaryButtonText="Get Started"
        secondrybuttontext="Learn More"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <WhyChoosePayPerHire />
      <PayPerHireProcess />
      <BlogsSection blogs={blogs} />
      <FAQSection faqData={faqData} />
      <Footer />
    </div>
  );
};

export default PayperHire;
