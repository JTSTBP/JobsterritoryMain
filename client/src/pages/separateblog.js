

import React, { useState } from "react";
import Navbar from "../components/home/Navbar";

import Footer from "../components/home/footer";
import ArticlePage from "../components/blogs/articlepage";


const SeparateBlogs = () => {
  return (
    <div>
      <Navbar/>
     <ArticlePage/>
      <Footer />
    </div>
  );
};

export default SeparateBlogs;
