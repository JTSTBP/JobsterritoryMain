import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import axios from "axios";

const Testimonial = () => {
  const defaultone = [
    {
      _id: 1,
      banner: "/images/cliimg1.png",
      heading: "Rajesh Kumar",
      message:
        "The Pay Per Hire model was perfect for our startup phase. We got access to top-tier talent without the financial risk of traditional recruitment agencies. Jobs Territory's team became an extension of our HR department.",
    }, // replace with your image paths
    {
      _id: 2,
      banner: "/images/cliimg2.png",
      heading: "Apeksha Agarwal ",
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

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/gettestimonials`
        ); // adjust baseURL if using proxy
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
  console.log(items, "it");

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, [items.length]);
  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div className="bg-[#EFEFEF] py-12  sm:px-2  font-poppins text-[#1B084C]">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 160, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold  font-playfair inline-block pb-2">
          What Clients Say
        </h2>
        <p className=" mt-2">
          Don't just take our word for it. Here's what our clients have to say
          about their experience with Jobs Territory
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          className="w-full  flex flex-col gap-5 items-center  lg:flex-row  justify-center px-4  md:py-4 rounded-lg "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Section */}
          <div className="flex items-start ">
            {/* Right Image Box with animation */}
            <motion.div
              key={items[active]._id}
              className="rounded-lg flex justify-center items-center flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={items[active].banner}
                alt="Logo"
                className="w-44 h-52 sm:w-72 sm:h-80 object-contain"
              />
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            className="mt-8 md:mt-0 md:ml-12 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#6A1FFF] font-playfair">
              {items[active].heading}
            </h2>
            <div className="flex items-start mt-4">
              <FaQuoteLeft className="text-[#6A1FFF] text-xl mr-3 mt-1" />
              <p className="text-base leading-relaxed">
                {items[active].message}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
