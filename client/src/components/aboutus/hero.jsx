import { ArrowDown } from "lucide-react";

export default function StoryVisionValues() {
  return (
    <section className=" py-12 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto ">
        <img
          src="/images/abouthero.png"
          alt="Hands Together"
          className="rounded-md"
        />
        <section className="w-full  mt-5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <p className="text-gray-800 text-lg leading-relaxed relative">
                <span className="text-5xl text-purple-600 absolute -left-6 top-0">
                  “
                </span>
                As one of India’s leading recruitment agencies, we pride
                ourselves on delivering end-to-end hiring solutions that cater
                to businesses of all sizes, from startups to large enterprises.
                Our approach goes beyond just filling positions—we focus on
                aligning the right talent with the company’s vision, culture,
                and growth strategy. By leveraging technology, industry
                expertise, and an extensive talent pool, we streamline
                recruitment and help organizations gain a competitive edge in
                today’s dynamic market.
              </p>

              <div
                className=" text-white text-3xl font-bold rounded-2xl p-16 text-center shadow-lg"
                style={{
                  backgroundImage: "url(/images/abtfig.png)",
                  backgroundSize: "cover",
                }}
              >
                About US
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-[#250B6A] text-white rounded-2xl p-8 md:p-10 shadow-lg">
              <p className="leading-relaxed mb-4">
                Are you a professional looking for the right opportunity to
                grow? Do you wonder if your skills are being matched with the
                career you truly deserve? That’s where we step in. We don’t just
                connect candidates with jobs—we guide them to roles where they
                can thrive, contribute, and build fulfilling careers. Our
                approach is about more than matching résumés with job
                descriptions; it’s about understanding who you are, what you
                want, and where your true potential lies.
              </p>
              <p className="leading-relaxed">
                By asking the right questions and carefully listening to your
                aspirations, we ensure every opportunity aligns with both your
                professional strengths and personal goals. Whether you’re
                seeking growth, stability, or a fresh challenge, we help you
                navigate the path with confidence. To us, every placement is
                more than just a job—it’s a stepping stone toward long-term
                success, empowering you to shape the career you’ve always
                envisioned.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
