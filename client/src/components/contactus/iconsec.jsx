import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsicons() {
  return (
    <div className="flex flex-col gap-6 font-poppins">

      {/* Contact Details Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/50 p-8">
        <h3 className="text-2xl font-bold text-[#1B084C] mb-8">Get in Touch</h3>

        <div className="space-y-8">

          {/* Email */}
          <div className="flex items-start gap-5 group">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-[#5500FE] border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Support</p>
              <a href="mailto:career@jobsterritory.com" className="block text-[#1B084C] font-semibold text-lg hover:text-[#5500FE] transition-colors">
                career@jobsterritory.com
              </a>
              <a href="mailto:hello@jobsterritory.co" className="block text-[#1B084C] font-semibold text-lg hover:text-[#5500FE] transition-colors">
                hello@jobsterritory.co
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-5 group">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-[#5500FE] border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Headquarters</p>
              <p className="text-[#1B084C] font-semibold text-lg leading-relaxed">
                Bangalore, India
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative 'Need Help' Card */}
      <div className="bg-gradient-to-br from-[#1B084C] to-[#2D274B] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        {/* Background Decor */}
        <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-[#5500FE] rounded-full blur-[50px] opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-32 h-32 bg-[#FF0080] rounded-full blur-[50px] opacity-30"></div>

        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-3">Looking for talent?</h4>
          <p className="text-white/80 mb-6 text-sm leading-relaxed">
            We help companies find the best candidates. Let's discuss your hiring needs.
          </p>
          <button className="w-full bg-white text-[#1B084C] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Start Hiring
          </button>
        </div>
      </div>

    </div>
  );
}
