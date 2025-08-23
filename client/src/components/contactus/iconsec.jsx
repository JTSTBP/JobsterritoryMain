import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsicons() {
  return (
    <section className="bg-white text-center py-12 px-6">
      {/* Top Button */}
      <div className="flex justify-center mb-8">
        <button className="flex items-center gap-2 border border-purple-500 text-purple-700 px-4 py-1 rounded-full text-sm hover:bg-purple-50">
          <span className="text-purple-500">●</span> Contact Us
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-purple-900 mb-2">Contact Us</h2>
      <p className="text-gray-600 mb-12">
        We’d love to hear from you, our friendly team is always here to chat.
      </p>

      {/* Contact Items */}
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 rounded-full p-6 mb-4">
            <Mail size={40} className="text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900 mb-1">Email</h3>
          <p className="text-gray-600 text-sm mb-1">
            Our friendly team is ready to help you
          </p>
          <a
            href="mailto:hello@jobsterritory.co"
            className="text-[#6A1FFF] text-sm hover:underline"
          >
            hello@jobsterritory.co
          </a>
        </div>

        {/* Office */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 rounded-full p-6 mb-4">
            <MapPin size={40} className="text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900 mb-1">Office</h3>
          <p className="text-gray-600 text-sm mb-1">
            Come say hello to our office HQ
          </p>
          <div className="text-[#6A1FFF] text-sm">
            <p>Bangalore</p>
        
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 rounded-full p-6 mb-4">
            <Phone size={40} className="text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900 mb-1">Phone</h3>
          <p className="text-gray-600 text-sm mb-1">
            Mon–Fri from 8 am to 5 pm
          </p>
         
        </div>
      </div>
    </section>
  );
}
