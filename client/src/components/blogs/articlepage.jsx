// import React from "react";
// import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

// export default function ArticlePage() {
//   return (
//     <div className="max-w-7xl mx-auto p-6 text-[#1B084C]">
//           <div className=" p-6">
//               <img src={"/images/eachblog.png"}/>
//         {/* Title with left border */}
//         <h1 className="text-3xl font-bold  leading-snug border-l-4 border-purple-600 pl-3 mt-8">
//           Scale Without Overloading HR: RAAS Explained .
//         </h1>

//         {/* Action Icons */}
//         <div className="flex gap-4 mt-6">
//           {/* Heart */}
//           <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
//             <Heart className="w-5 h-5 " />
//           </button>

//           {/* Comment */}
//           <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
//             <MessageCircle className="w-5 h-5 " />
//           </button>

//           {/* Share */}
//           <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
//             <Share2 className="w-5 h-5 " />
//           </button>

//           {/* Bookmark */}
//           <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
//             <Bookmark className="w-5 h-5 " />
//           </button>
//         </div>
//       </div>
//           <div className="flex flex-col md:flex-row">

//         <div className="space-y-5 text-gray-700 leading-relaxed">
//           <p>
//             In today’s competitive market, scaling your business quickly often
//             comes with a hidden challenge — the HR bottleneck. Your internal
//             recruitment team may already be stretched thin, juggling multiple
//             job openings, managing staff, and ensuring compliance. This is where
//             RAAS (Recruitment as a Service) steps in.
//           </p>
//           <p>
//             Instead of adding more pressure to your in-house HR department, RAAS
//             gives you access to dedicated resources who scale recruitment
//             efforts without the overhead costs of hiring additional recruiters.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-900 mt-6">
//             Why RAAS Is the Smarter Choice
//           </h2>

//           <h3 className="text-lg font-semibold text-gray-900">
//             Unlimited Hiring, One Fixed Cost
//           </h3>
//           <p>
//             With RAAS, you can fill as many positions as needed without worrying
//             about per-hire fees. This makes it far more predictable and scalable
//             within budget — no nasty surprises at the end of the month.
//           </p>

//           <h3 className="text-lg font-semibold text-gray-900">
//             Faster Time-to-Hire
//           </h3>
//           <p>
//             RAAS teams are 100% focused on recruitment, meaning your open roles
//             get filled much faster. No juggling with admin or firefighting —
//             your dream team is built in weeks, not months.
//           </p>

//           <h3 className="text-lg font-semibold text-gray-900">
//             Specialized Talent Access
//           </h3>
//           <p>
//             Whether your business needs technical roles, blue-collar workers, or
//             executive leadership, RAAS connects you to a wide talent pool,
//             ensuring the right match every time.
//           </p>

//           <h3 className="text-lg font-semibold text-gray-900">
//             On-Demand Hiring
//           </h3>
//           <p>
//             Need to scale up for the next 50 hires and then scale down? No
//             problem. RAAS scales flexibly, without locking you into the hiring
//             manpower after the demand dips.
//           </p>

//           <h3 className="text-lg font-semibold text-gray-900">
//             Reduced HR Burnouts
//           </h3>
//           <p>
//             By offloading recruitment, your in-house engagement, retention, and
//             compliance teams can focus on strengthening culture. RAAS takes care
//             of the sourcing, screening, and onboarding so they don’t burn out.
//           </p>

//           <h3 className="text-lg font-semibold text-gray-900">
//             The Bottom Line
//           </h3>
//           <p>
//             If you’re ready to scale smart, save money, and hire better, it’s
//             time to switch to RAAS.
//           </p>
//         </div>
//         <div className="max-w-sm mx-auto space-y-6 p-4">
//           {/* Need Hiring Help Section */}
//           <div className="rounded-2xl p-6 text-center shadow-md bg-gradient-to-r from-purple-200 to-purple-300">
//             <h2 className="text-lg font-semibold text-gray-900">
//               Need Hiring Help?
//             </h2>
//             <p className="text-sm text-gray-700 mt-1">
//               Get expert recruitment assistance tailored to your needs.
//             </p>
//             <div className="flex flex-col gap-3 mt-4">
//               <button className="px-5 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-100 transition">
//                 Call Now
//               </button>
//               <button className="px-5 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-100 transition">
//                 Whatsapp
//               </button>
//             </div>
//           </div>

//           {/* Related Articles Section */}
//           <div className="rounded-2xl p-6 text-center shadow-md bg-white">
//             <h2 className="text-lg font-semibold text-gray-900">
//               Related Articles
//             </h2>
//             <div className="flex justify-center items-center my-4">
//               <div className="w-12 h-12 bg-purple-200 rounded-md"></div>
//             </div>
//             <button className="px-6 py-2 bg-purple-200 text-gray-900 rounded-full font-medium hover:bg-purple-300 transition">
//               Email Us
//             </button>
//           </div>

//           {/* Stay Updated Section */}
//           <div className="rounded-2xl p-6 text-center shadow-md bg-white">
//             <h2 className="text-lg font-semibold text-gray-900">
//               Stay Updated
//             </h2>
//             <p className="text-sm text-gray-700 mt-1">
//               Get the latest insights delivered to your inbox.
//             </p>
//             <div className="mt-4 flex flex-col gap-3">
//               <input
//                 type="email"
//                 placeholder="your Email"
//                 className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//               <button className="px-6 py-2 bg-purple-200 text-gray-900 rounded-full font-medium hover:bg-purple-300 transition">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Content */}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import axios from "axios";

export default function ArticlePage() {
  const { slug } = useParams(); // slug from URL
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch single blog by slug
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blogs/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;
  const clean = blog.desc.replace(/\\r\\n/g, " ");

  return (
    <div className="max-w-7xl mx-auto p-6 text-[#1B084C]">
      <div className="p-6">
        <img
          src={blog.banner}
          alt={blog.heading}
          className="w-full rounded-xl"
        />

        {/* Title with left border */}
        <h1 className="text-3xl font-bold leading-snug border-l-4 border-purple-600 pl-3 mt-8">
          {blog.heading}
        </h1>

        {/* Action Icons */}
        <div className="flex gap-4 mt-6">
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <Heart className="w-5 h-5 " />
          </button>
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <MessageCircle className="w-5 h-5 " />
          </button>
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <Share2 className="w-5 h-5 " />
          </button>
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <Bookmark className="w-5 h-5 " />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Blog Content */}
        <div
          className="space-y-5 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: clean }}
        />

        {/* Sidebar */}
        <div className="max-w-sm mx-auto space-y-6 p-4">
          {/* Need Hiring Help Section */}
          <div className="rounded-2xl p-6 text-center shadow-md bg-gradient-to-r from-purple-200 to-purple-300">
            <h2 className="text-lg font-semibold text-gray-900">
              Need Hiring Help?
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Get expert recruitment assistance tailored to your needs.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="px-5 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-100 transition"
                onClick={() => {
                  navigate("/contactus");
                }}
              >
                Hire Now
              </button>
              <button className="px-5 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-100 transition">
                Whatsapp
              </button>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="rounded-2xl p-6 text-center shadow-md bg-white">
            <h2 className="text-lg font-semibold text-gray-900">
              Related Articles
            </h2>
            <div className="flex justify-center items-center my-4">
              <div className="w-12 h-12 bg-purple-200 rounded-md"></div>
            </div>
            <button
              className="px-6 py-2 bg-purple-200 text-gray-900 rounded-full font-medium hover:bg-purple-300 transition"
              onClick={() => {
                navigate("/contactus");
              }}
            >
              Email Us
            </button>
          </div>

          {/* Stay Updated Section */}
          <div className="rounded-2xl p-6 text-center shadow-md bg-white">
            <h2 className="text-lg font-semibold text-gray-900">
              Stay Updated
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Get the latest insights delivered to your inbox.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="px-6 py-2 bg-purple-200 text-gray-900 rounded-full font-medium hover:bg-purple-300 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
