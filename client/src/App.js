


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/homepage";

import PayperHire from "./pages/payperhire";
import FractionalHiring from "./pages/fractionalhiring";
import ContactUs from "./pages/contactus";
import CaseStudies from "./pages/casestudies";
import CaseStudiesMain from "./components/casestudies/mainsection";
import CaseStudy from "./pages/casestudies";
import BlogsPage from "./pages/blogs";
import SeparateBlogs from "./pages/separateblog";
import ViewCaseStudy from "./pages/viewcasestudy";
import ScrollToTop from "./pages/scrollTop";
import AboutUs from "./pages/aboutus";




export default function App() {

 
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/FractionHiring" element={<FractionalHiring />} />

          <Route path="/Payperhire" element={<PayperHire />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/CaseStudies" element={<CaseStudy />} />
          <Route path="/casestudy/:slug" element={<ViewCaseStudy />} />
          <Route path="/Blogs" element={<BlogsPage />} />
          <Route path="/Blog/:slug" element={<SeparateBlogs />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
