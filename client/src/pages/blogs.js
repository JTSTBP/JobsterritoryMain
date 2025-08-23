import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import Footer from "../components/home/footer";

import FeaturedArticles from "../components/blogs/featuredarticles";

const BlogsPage = () => {
  return (
    <div>
      <Navbar />
     
          <FeaturedArticles/>
      <Footer />
    </div>
  );
};

export default BlogsPage;
