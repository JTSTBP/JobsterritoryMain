import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ClientLogos = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy fallback logos
  const fallbackLogos = [
    { heading: "Logo1", banner: "/images/img1.png" },
    { heading: "Logo2", banner: "/images/img2.png" },
    { heading: "Logo3", banner: "/images/img3.png" },
    { heading: "Logo4", banner: "/images/img4.png" },
    { heading: "Logo5", banner: "/images/unac.png" },
  ];

  const stats = [
    { value: "5000+", label: "Companies Served" },
    { value: "15000+", label: "Successful Placements" },
    { value: "95%", label: "Client Retention" },
    { value: "48hrs", label: "Average Response" },
  ];

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/getlogos`
        ); // 🔹 Change API URL
        if (res.data && res.data.length > 0) {
          setLogos(res.data); // pick only `banner` field
        } else {
          setLogos([...fallbackLogos, ...fallbackLogos]);
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
        setLogos(fallbackLogos);
      } finally {
        setLoading(false);
      }
    };
    fetchLogos();
  }, []);

  // Double the array for smooth infinite scroll
  const allImages = [...logos, ...logos];

  return (
    <section className="py-16 bg-[#EFEFEF] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-[#1B084C]"
        >
          <h2 className="text-3xl font-bold font-montserrat mb-4">
            Trusted by India’s Industry Leaders
          </h2>
          <p className="max-w-2xl mx-auto font-poppins">
            From ambitious startups to India’s most iconic brands, we match
            businesses with the people who spark innovation, drive measurable
            results, and shape the future.
          </p>
        </motion.div>
      </div>

      {/* Background with Scrolling Logos */}
      <div className="relative w-full h-40 sm:h-60 overflow-hidden">
        {/* Vector Background */}
        <img
          src="/images/vector.png"
          alt="background"
          className="absolute inset-0 w-full h-full z-0"
        />

        {/* Logos */}
        {!loading && (
          <div className="absolute inset-0 flex overflow-hidden z-10">
            <div className="flex animate-scroll gap-7 md:gap-32 min-w-max">
              {allImages.map((item, index) => (
                <div
                  key={index}
                  className="w-auto flex-shrink-0 flex px-2 sm:px-4"
                >
                  <img
                    src={item.banner}
                    alt={`logo-${item.heading}-${index}`}
                    className="w-24 h-20 sm:w-32 sm:h-32 md:w-44 md:h-28 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stats Circles */}
      <div className="relative flex justify-center gap-8 flex-wrap bg-white pb-24">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-violet-100 rounded-full flex flex-col justify-center items-center text-center shadow-md border-4 border-[#DAD4FF]"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#6A1FFF]">
              {stat.value}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium  mt-2 text-[#1B084C]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
