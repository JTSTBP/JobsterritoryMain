

// export default function VisionCard() {
//     return (
//         <div
//             className="flex justify-around flex-wrap"
//             >
//         <div className="relative max-w-xl w-full  rounded-t-xl rounded-bl-xl overflow-hidden my-10">
//           {/* Main Card */}
//           <div className=" p-6 md:p-10 border border-purple-500 rounded-t-xl rounded-bl-xl shadow-lg">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl font-bold text-[#6A1FFF] mb-4">
//               Our Vision
//             </h2>

//             {/* Text */}
//             <p className="text-[#1e1e1e] leading-relaxed">
//               Our vision is to streamline the hiring process by offering
//               customized recruitment solutions that cater to the unique needs of
//               every client— from agile startups to established enterprises. We
//               aim to go beyond traditional recruitment by delivering talent
//               strategies that align with each organization’s culture, goals, and
//               long-term growth. By combining innovation, industry insights, and
//               a people-first approach, we aspire to become the trusted partner
//               that businesses rely on for building strong, future-ready teams.
//             </p>
//           </div>

//           {/* Inverted corner with image */}
//           <span
//             className="hidden sm:flex absolute -top-6 -right-6 w-32 h-28 rounded-[30px] bg-[#EFEFEF] border-b border-l border-purple-500 items-center justify-center"
//             aria-hidden="true"
//           >
//             <img
//               src="/images/abtimg.png" // 👈 replace with your actual path
//               alt="Four Petal Icon"
//               className="w-12 h-12 object-contain"
//             />
//           </span>
//         </div>
//         <div className="relative max-w-xl w-full  rounded-t-xl rounded-bl-xl overflow-hidden my-10">
//           {/* Main Card */}
//           <div className=" p-6 md:p-10 border border-purple-500 rounded-t-xl rounded-bl-xl shadow-lg">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl font-bold text-[#6A1FFF] mb-4">
//               Our Mission
//             </h2>

//             {/* Text */}
//             <p className="text-[#1e1e1e] leading-relaxed">
//               Our mission is to connect businesses with the right talent through
//               a team of experienced recruiters and innovative strategies. We
//               focus on ensuring high success rates by placing candidates who not
//               only meet skill requirements but also align seamlessly with our
//               clients’ business objectives. By prioritizing quality, precision,
//               and long-term fit, we strive to empower organizations with the
//               workforce they need to achieve sustainable growth.
//             </p>
//           </div>

//           {/* Inverted corner with image */}
//           <span
//             className="hidden sm:flex absolute -top-6 -right-6 w-32 h-28 rounded-[30px] bg-[#EFEFEF] border-b border-l border-purple-500 items-center justify-center"
//             aria-hidden="true"
//           >
//             <img
//               src="/images/abtimg.png" // 👈 replace with your actual path
//               alt="Four Petal Icon"
//               className="w-12 h-12 object-contain"
//             />
//           </span>
//         </div>
//       </div>
//     );
// }


export default function VisionCard() {
  return (
    <div className="flex justify-around flex-wrap items-stretch gap-6">
      {/* Card 1 */}
      <div className="relative max-w-xl w-full lg:w-[45%] rounded-t-xl rounded-bl-xl overflow-hidden my-10 flex">
        <div className="p-6 md:p-10 border border-purple-500 rounded-t-xl rounded-bl-xl shadow-lg flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1FFF] mb-4">
            Our Vision
          </h2>
          <p className="text-[#1e1e1e] leading-relaxed flex-grow">
            Our vision is to streamline the hiring process by offering
            customized recruitment solutions that cater to the unique needs of
            every client— from agile startups to established enterprises. We aim
            to go beyond traditional recruitment by delivering talent strategies
            that align with each organization’s culture, goals, and long-term
            growth. By combining innovation, industry insights, and a
            people-first approach, we aspire to become the trusted partner that
            businesses rely on for building strong, future-ready teams.
          </p>
        </div>
        {/* Inverted corner with image */}
        <span className="hidden sm:flex absolute -top-6 -right-6 w-32 h-28 rounded-[30px] bg-[#EFEFEF] border-b border-l border-purple-500 items-center justify-center">
          <img
            src="/images/abtimg.png"
            alt="Four Petal Icon"
            className="w-12 h-12 object-contain"
          />
        </span>
      </div>

      {/* Card 2 */}
      <div className="relative max-w-xl w-full lg:w-[45%] rounded-t-xl rounded-bl-xl overflow-hidden my-10 flex">
        <div className="p-6 md:p-10 border border-purple-500 rounded-t-xl rounded-bl-xl shadow-lg flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1FFF] mb-4">
            Our Mission
          </h2>
          <p className="text-[#1e1e1e] leading-relaxed flex-grow">
            Our mission is to connect businesses with the right talent through a
            team of experienced recruiters and innovative strategies. We focus
            on ensuring high success rates by placing candidates who not only
            meet skill requirements but also align seamlessly with our clients’
            business objectives. By prioritizing quality, precision, and
            long-term fit, we strive to empower organizations with the workforce
            they need to achieve sustainable growth.
          </p>
        </div>
        {/* Inverted corner with image */}
        <span className="hidden sm:flex absolute -top-6 -right-6 w-32 h-28 rounded-[30px] bg-[#EFEFEF] border-b border-l border-purple-500 items-center justify-center">
          <img
            src="/images/abtimg.png"
            alt="Four Petal Icon"
            className="w-12 h-12 object-contain"
          />
        </span>
      </div>
    </div>
  );
}
