import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Testimonial = () => {
  const defaultone = [
    {
      _id: 1,
      banner: "/images/cliimg1.png",
      heading: "Rajesh Kumar",
      message:
        "The Industries We Hire model was perfect for our startup phase. We got access to top-tier talent without the financial risk of traditional recruitment agencies. Jobs Territory's team became an extension of our HR department.",
    },
    {
      _id: 2,
      banner: "/images/cliimg2.png",
      heading: "Apeksha Agarwal",
      message:
        "Jobs Territory made our dermatologist hiring seamless and quick. Their team understood our needs and delivered quality candidates on time. Highly professional and efficient!",
    },
    {
      _id: 3,
      banner: "/images/cliimg3.png",
      heading: "Subrina T Lepcha",
      message:
        "Jobs Territory played a key role in helping us hire strong SaaS sales talent. Their understanding of the domain and quick turnaround made the process smooth and effective. Great experience working with their team!",
    },
    {
      _id: 4,
      banner: "/images/cliimg4.png",
      heading: "Mohammed Mohzin",
      message:
        "Partnering with Jobs Territory made a real difference in our Business Development and Collections hiring. Their team brought in strong candidates, understood our pace, and delivered with consistency. A dependable hiring ally.....",
    },
  ];

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  const location = useLocation();

  // Scroll to hash on mount / hash change
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const scroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scroll, 300);
        }
      };
      scroll();
    };
    setTimeout(scrollToHash, 600);
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/gettestimonials`);
        if (res.data && res.data.length > 0) {
          setItems(res.data);
        } else {
          setItems([...defaultone]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setItems([...defaultone]);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Helper: convert HTML string to plain text for a safe preview
  const htmlToText = (html) => {
    if (!html) return "";
    try {
      const clean = html.replace(/\\r\\n/g, " "); // handle escaped line breaks
      const doc = new DOMParser().parseFromString(clean, "text/html");
      return (doc.body.textContent || "").replace(/\\s+/g, " ").trim();
    } catch {
      // fallback: strip tags
      return html
        .replace(/<[^>]+>/g, " ")
        .replace(/\\s+/g, " ")
        .trim();
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  if (loading) return <p className="text-center">Loading testimonials...</p>;
  if (items.length === 0) return <p className="text-center">No testimonials available</p>;

  return (
    <div id="testimonials" className="bg-[#EFEFEF] py-12 px-4 sm:px-6 font-poppins text-[#1B084C]">
      {/* Heading */}
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="flex justify-center mb-6">
          <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: 160, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat inline-block pb-2">Client Success Stories</h2>
        <p className="mt-2">Don't just take our word for it. Here's what our clients have to say about their experience with Jobs Territory</p>
      </motion.div>

      {/* Scrolling testimonials */}
      <div className="relative h-[600px] md:h-[800px] overflow-hidden">
        {/* Top fade/blur */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#EFEFEF] to-transparent pointer-events-none z-10"></div>
        {/* Scroll container */}
        <div className="animate-scrollUp space-y-6" onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")} onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...items, ...items].map((t, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 transform cursor-pointer inline-block w-full hover:z-50 relative">
                <img src={t.banner} alt={t.heading} className="w-40 h-40 object-contain rounded-xl mb-4 my-2 mx-auto" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{t.heading}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{htmlToText(t.message)}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom fade/blur */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#EFEFEF] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default Testimonial;
