
// import React, { useState, useEffect } from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Rajesh Kumar",
//     title: "Founder & CEO",
//     company: "InnovateLabs",
//     image: "/images/clientsay.png",
//     quote:
//       "The Pay Per Hire model was perfect for our startup phase. We got access to top-tier talent without the financial risk of traditional recruitment agencies. Jobs Territory's team became an extension of our HR department.",
//   },
//   {
//     name: "Priya Sharma",
//     title: "Head of Talent Acquisition",
//     company: "TechVision Solutions",
//     image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
//     quote:
//       "Jobs Territory transformed our hiring process completely. Their RAAS model provided us with dedicated recruiters who understood our culture and technical requirements perfectly.",
//   },
// ];

// const Testimonial = () => {
// const items = [
//   { id: 1, img: "/images/cliimg1.png" }, // replace with your image paths
//   { id: 2, img: "/images/cliimg2.png" },
//   { id: 3, img: "/images/cliimg3.png" },
//   { id: 4, img: "/images/cliimg4.png" },
// ];

// const [active, setActive] = useState(0);

// // Auto-slide effect
// useEffect(() => {
//   const interval = setInterval(() => {
//     setActive((prev) => (prev + 1) % items.length);
//   }, 3000); // change every 3s
//   return () => clearInterval(interval);
// }, [items.length]);

//   return (
//     <div className="bg-[#EFEFEF] py-12 md:px-20 font-inter text-[#1B084C]">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//          <div className="flex justify-center mb-6">
//                     <motion.div
//                       initial={{ width: 0, opacity: 0 }}
//                       whileInView={{ width: 160, opacity: 1 }}
//                       transition={{ duration: 0.8 }}
//                       viewport={{ once: true }}
//                       className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
//                     />
//                   </div>
//         <h2 className="text-3xl md:text-4xl font-bold  font-museo inline-block pb-2">
//           What Clients Say
//         </h2>
//         <p className=" mt-2">
//           Don't just take our word for it. Here's what our clients have to say
//           about their experience with Jobs Territory
//         </p>
//       </motion.div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           className="w-full  flex flex-col md:flex-row items-start justify-center px-4 py-12 md:py-16 rounded-lg "
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Left Section */}
//           <motion.div
//             className="relative flex flex-col items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={testimonial.image}
//               alt={testimonial.company}
//               className="w-80 h-90 object-contain"
//             />
//             <div className="text-center md:text-left mt-4 font-museo">
//               <p className="text-[#6A1FFF] font-medium">{testimonial.title}</p>
//               <p className="font-semibold">{testimonial.company}</p>
//             </div>
//           </motion.div>

//           {/* Right Section */}
//           <motion.div
//             className="mt-8 md:mt-0 md:ml-12 max-w-xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h2 className="text-xl font-bold text-[#6A1FFF] font-museo">
//               {testimonial.name}
//             </h2>
//             <div className="flex items-start mt-4">
//               <FaQuoteLeft className="text-[#6A1FFF] text-xl mr-3 mt-1" />
//               <p className="text-base leading-relaxed">{testimonial.quote}</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Testimonial;



// import { useState, useEffect } from "react";

// export default function TestimonialSlider() {
//  const items = [
//    { id: 1, img: "/images/cliimg1.png" }, // replace with your image paths
//    { id: 2, img: "/images/cliimg2.png" },
//    { id: 3, img: "/images/cliimg3.png" },
//    { id: 4, img: "/images/cliimg4.png" },
//  ];

//   const [active, setActive] = useState(0);

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % items.length);
//     }, 3000); // change every 3s
//     return () => clearInterval(interval);
//   }, [items.length]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="flex items-center">
//         {/* Left Vertical Numbers + Line Segments */}
//         <div className="flex flex-col gap-5 items-center mr-6">
//           {items.map((item, index) => (
//             <div
//               key={item.id}
//               className="flex flex-row gap-2 items-start cursor-pointer"
//               onClick={() => setActive(index)}
//             >
//               {/* Line Segment */}
//               <div
//                 className={`w-0.5 h-12 ${
//                   active === index ? "bg-purple-600" : "bg-gray-300"
//                 }`}
//               ></div>

//               {/* Number */}
//               <span
//                 className={`text-sm mb-2 transition-colors duration-300 ${
//                   active === index ? "text-purple-600 font-bold" : "text-black"
//                 }`}
//               >
//                 0{item.id}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Right Image Box */}
//         <div className="bg-[#e9e6f7] w-72 h-72 rounded-lg flex justify-center items-center transition-all duration-500">
//           <img
//             src={items[active].img}
//             alt="Logo"
//             className="w-32 h-32 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Founder & CEO",
    company: "InnovateLabs",
    image: "/images/clientsay.png",
    quote:
      "The Pay Per Hire model was perfect for our startup phase. We got access to top-tier talent without the financial risk of traditional recruitment agencies. Jobs Territory's team became an extension of our HR department.",
  },
  {
    name: "Priya Sharma",
    title: "Head of Talent Acquisition",
    company: "TechVision Solutions",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    quote:
      "Jobs Territory transformed our hiring process completely. Their RAAS model provided us with dedicated recruiters who understood our culture and technical requirements perfectly.",
  },
];

const Testimonial = () => {
const items = [
  {
    id: 1,
    img: "/images/cliimg1.png",
    heading: "Rajesh Kumar",
    para: "The Pay Per Hire model was perfect for our startup phase. We got access to top-tier talent without the financial risk of traditional recruitment agencies. Jobs Territory's team became an extension of our HR department.",
  }, // replace with your image paths
  {
    id: 2,
    img: "/images/cliimg2.png",
    heading: "Apeksha Agarwal ",
    para: "Jobs Territory made our dermatologist hiring seamless and quick. Their team understood our needs and delivered quality candidates on time. Highly professional and efficient!",
  },
  {
    id: 3,
    img: "/images/cliimg3.png",
    heading: "Subrina T Lepcha",
    para: "Jobs Territory played a key role in helping us hire strong SaaS sales talent. Their understanding of the domain and quick turnaround made the process smooth and effective. Great experience working with their team!",
  },
  {
    id: 4,
    img: "/images/cliimg4.png",
    heading: "Mohammed Mohzin",
    para: "Partnering with Jobs Territory made a real difference in our Business Development and Collections hiring. Their team brought in strong candidates, understood our pace, and delivered with consistency. A dependable hiring ally.....",
  },
];

const [active, setActive] = useState(0);

// Auto-slide effect
useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, 3000); // change every 3s
  return () => clearInterval(interval);
}, [items.length]);

  return (
    <div className="bg-[#EFEFEF] py-12  sm:px-2  font-inter text-[#1B084C]">
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
        <h2 className="text-3xl md:text-4xl font-bold  font-museo inline-block pb-2">
          What Clients Say
        </h2>
        <p className=" mt-2">
          Don't just take our word for it. Here's what our clients have to say
          about their experience with Jobs Territory
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          className="w-full  flex flex-col gap-5 items-center lg:items-start  lg:flex-row items-start justify-center px-4 py-12 md:py-16 rounded-lg "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Section */}
          <div className="flex items-start ">
            {/* Left Vertical Numbers + Line Segments */}
            <div className="flex flex-col gap-5 items-center mr-6 ">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-row gap-2 items-start cursor-pointer "
                  onClick={() => setActive(index)}
                >
                  {/* Animated Line Segment */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: active === index ? 48 : 48, // always same height
                      backgroundColor: active === index ? "#6A1FFF" : "#D1D5DB", // purple or gray
                      width: active === index ? 3 : 2, // slightly wider when active
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-0.5"
                  />

                  {/* Number */}
                  <motion.span
                    animate={{
                      color: active === index ? "#6A1FFF" : "#000",
                      fontWeight: active === index ? 700 : 400,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm mb-2"
                  >
                    0{item.id}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* Right Image Box with animation */}
            {/* Right Image Box with animation */}
            <motion.div
              key={items[active].id}
              className="rounded-lg flex justify-center items-center flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={items[active].img}
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
           
            <h2 className="text-xl font-bold text-[#6A1FFF] font-museo">
              {items[active].heading}
            </h2>
            <div className="flex items-start mt-4">
              <FaQuoteLeft className="text-[#6A1FFF] text-xl mr-3 mt-1" />
              <p className="text-base leading-relaxed">{items[active].para}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;