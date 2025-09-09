import React, { useState } from "react";
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
import RecruiterPopup from "./components/commonsections/popup";
import { PopupProvider, usePopup } from "./contexts/popupcontext";
import TermsAndConditions from "./components/terms";
import PrivacyPolicy from "./components/policy";
import NotFound from "./pages/notfound";

// Global popup placed here
const PopupContainer = () => {
  const { isPopupOpen, closePopup } = usePopup();
  return <RecruiterPopup isOpen={isPopupOpen} onClose={closePopup} />;
};

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <PopupProvider>
        <Router>
          <ScrollToTop />
          <PopupContainer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/fractionalhiring" element={<FractionalHiring />} />

            {/* <Route path="/Payperhire" element={<PayperHire />} /> */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/casestudies" element={<CaseStudy />} />
            <Route path="/casestudy/:slug" element={<ViewCaseStudy />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<SeparateBlogs />} />
            <Route
              path="/termsandconditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PopupProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
