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
    { value: "48Hrs", label: "Average Response" },
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
    <section className="pt-16 bg-[#EFEFEF] overflow-hidden">
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
            Trusted by 500+ companies | 15+ years of expertise | 80% faster
            hiring | Global delivery across India, UAE, UK & Australia
            {/* From ambitious startups to India’s most iconic brands, we match
            businesses with the people who spark innovation, drive measurable
            results, and shape the future. */}
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
          <div className="absolute inset-0 flex overflow-hidden z-10 group">
            <div className="flex animate-scroll group-hover:pause gap-7 md:gap-32 min-w-max">
              {allImages.map((item, index) => (
                <div
                  key={index}
                  className="w-auto flex-shrink-0 flex px-2 sm:px-4 transition-transform duration-300 hover:scale-125"
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

      {/* Stats Cards */}
      <div className="relative bg-white py-16 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center gap-8 flex-wrap max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                viewport={{ once: true }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#F5F3FF] to-white rounded-full flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E9D5FF] group"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent rounded-full"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A1FFF] mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base font-medium text-[#1B084C]/70">
                    {stat.label}
                  </p>
                </div>

                {/* Outer Ring */}
                <div className="absolute inset-[-4px] rounded-full border-2 border-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] [mask-image:linear-gradient(white,white),linear-gradient(white,white)] [mask-clip:content-box,padding-box] [mask-composite:exclude] opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
