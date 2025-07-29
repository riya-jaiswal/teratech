import React from 'react'
import { Link } from 'react-router-dom'
import bgHero from '../assets/Food-Beverages-and-Agriculture.webp'

const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-[#003366] text-white h-[90vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Engineering Excellence for Food, Pharma & Beverage</h1>
          <p className="text-lg mb-6">Custom Machines | Process Systems | Automation Solutions</p>
          <a href="/contact" className="bg-yellow-400 hover:bg-yellow-300 text-[#003366] px-6 py-3 font-semibold rounded shadow transition">Get a Quote</a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">About Tetra-Tech</h2>
            <p className="mb-4">
              Established in 2019, Tetra-Tech Engineering is a leading manufacturer and exporter of high-performance systems for the Food, Dairy, Pharma, and Cosmetics industries.
            </p>
            <p>
              Our mission is to provide globally automated, energy-efficient process solutions — and to become a ₹100 Cr company by 2030.
            </p>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091870622-2c58f6d21f1e?auto=format&fit=crop&w=800&q=80"
              alt="Factory"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">Our Key Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Portable & Modular CIP Systems",
              "PHE & Tubular Pasteurizers",
              "Hot Water Generator",
              "Ribbon Blender & Powder Mixers",
              "Shell & Tube Heat Exchangers",
              "Chilling Units",
            ].map((product, idx) => (
              <div key={idx} className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{product}</h3>
                <p className="text-sm text-gray-600">Custom-designed for high efficiency and hygiene in industrial processing.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">Our Core Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Custom Machine Design",
              "Automated Process Solutions",
              "Energy-Efficient Engineering",
              "Turnkey Project Execution",
              "Industrial Skid Systems",
              "After-Sales Support",
            ].map((service, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{service}</h3>
                <p className="text-sm text-gray-600">We work like your extended team to ensure smooth and efficient execution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003366] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What industries do you serve?",
                a: "We specialize in solutions for Food, Dairy, Pharma, and Cosmetics industries."
              },
              {
                q: "Can you design custom machines for unique processes?",
                a: "Yes, we offer fully customized engineering solutions based on your process requirements."
              },
              {
                q: "Do you provide after-sales support?",
                a: "Absolutely. Our team ensures smooth installation, training, and long-term support."
              },
              {
                q: "Where are your products manufactured?",
                a: "All our systems are manufactured in India using high-quality, globally-sourced components."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold text-[#003366] text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CONTACT SECTION */}
<section className="py-20 px-6 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    {/* Contact Details */}
    <div className="bg-[#003366] text-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Let’s Talk About Your Project</h2>
      <p className="mb-6 text-gray-100">Have questions or need a custom solution? Reach out to us today.</p>

      <div className="space-y-6 text-base">
        <div className="flex items-start space-x-4">
          <span className="text-yellow-400 text-2xl">📍</span>
          <div>
            <p className="font-semibold">Address:</p>
            <p>Industrial Area, Pune, Maharashtra, India</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-yellow-400 text-2xl">📞</span>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>+91-9876543210</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-yellow-400 text-2xl">✉️</span>
          <div>
            <p className="font-semibold">Email:</p>
            <p>info@tetratechengineering.com</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-yellow-400 text-2xl">🕒</span>
          <div>
            <p className="font-semibold">Hours:</p>
            <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-[#003366] mb-6">Send a Message</h3>
      <form className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#003366] text-white font-semibold py-3 px-6 rounded hover:bg-[#002244] transition"
        >
          Send Message
        </button>
      </form>
    </div>
    
  </div>
</section>


    </div>
  );
};

export default Home;
