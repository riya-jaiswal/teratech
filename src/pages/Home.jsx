import React from 'react'
import { Link } from 'react-router-dom'
import bgHero from '../assets/Food-Beverages-and-Agriculture.webp' 

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="h-[70vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Engineering Excellence for Dairy, <br /> Food & Pharma Industries. 
        </h1>
        <Link
          to="/contact"
          className="mt-4 bg-[#DB1A13] text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">About Tetratech Engineering LLP</h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Tetra-Tech Engineering is a leading manufacturer of process systems and heat exchangers for the Dairy, Food, Pharma, and Cosmetic industries. Established in 2019 in Pune, we provide energy-efficient, automated solutions tailored to client needs. Our commitment to innovation, quality, and customer satisfaction drives productivity, sustainability, and long-term success for our partners.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Mission</h4>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">To deliver energy-efficient, automated process solutions that empower the Food, Pharma, and Cosmetic industries with innovation and reliability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Vision</h4>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">To become a ₹100 Cr global engineering leader by 2030, driving excellence in processing technology and client-centric solutions.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
<section className="py-12 md:py-16 px-4 md:px-20 bg-white">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Our Products</h2>
  {/* Product Overview */}
  <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 text-center shadow-lg border-l-4 border-blue-500">
    <h3 className="font-semibold text-xl md:text-2xl mb-2 text-gray-800">Product Overview</h3>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      <strong>TETRA-TECH Engineering</strong> is a specialized manufacturer and exporter of advanced machinery and systems for the Dairy, Food, Pharma, Beverage, and Cosmetic industries. With a sharp focus on innovation, energy efficiency, and automation, our products are engineered to optimize productivity, reliability, and hygiene standards for your manufacturing needs.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
    {/* Existing Product Feature Cards (as in your code above)... */}
    {/* Product 1 to Product 4 */}
    {/* ... */}
  </div>

  {/* Product Lines (Key Products): */}
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* CIP Systems */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 hover:shadow-xl transition">
        <h4 className="font-semibold text-lg text-blue-700 flex items-center gap-2 mb-1">
          <span>🧼 CIP (Clean-in-Place) Systems</span>
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Portable CIP Module — manual/automatic, ideal for small installations</li>
          <li>Fixed CIP Systems — automatic, single-line cleaning for mid-size ops</li>
          <li>Modular CIP Systems — fully automatic, for large-scale multi-line operations</li>
        </ul>
      </div>
      {/* Pasteurization Systems */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 hover:shadow-xl transition">
        <h4 className="font-semibold text-lg text-green-700 flex items-center gap-2 mb-1">
          <span>🥛 Pasteurization Systems</span>
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>PHE Pasteurizer with Homogenizer — for milk, yogurt, ice cream mix (2,000–60,000 L/hr)</li>
          <li>Tubular Juice Pasteurizer — for juice/low-acid products (2,000–10,000 L/hr)</li>
        </ul>
      </div>
      {/* Hot Water Systems */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 hover:shadow-xl transition">
        <h4 className="font-semibold text-lg text-orange-700 flex items-center gap-2 mb-1">
          <span>♨️ Hot Water Systems</span>
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Hot Water Generator — supports diesel, LPG, CNG, crude oil</li>
          <li>PHE-Based Hot Water System — from 30,000 kcal/hr to 5 million kcal/hr</li>
        </ul>
      </div>
      {/* Powder Mixing */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 hover:shadow-xl transition">
        <h4 className="font-semibold text-lg text-purple-700 flex items-center gap-2 mb-1">
          <span>🧂 Powder Mixing & Blending</span>
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Powder Mixers — for masala, detergent, chemicals</li>
          <li>Ribbon Blender — dry/wet ingredient blending, up to 75% energy saving</li>
        </ul>
      </div>
      {/* Heat Exchangers */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 hover:shadow-xl transition">
        <h4 className="font-semibold text-lg text-red-700 flex items-center gap-2 mb-1">
          <span>🌡️ Heat Exchangers</span>
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Shell & Tube Exchangers — MT & DTA Series, corrugated tubes</li>
          <li>Corrugated Tube Exchangers — for food/chemical/pharma</li>
          <li>Chilling Units (TETRA THERM 1 Series) — efficient cooling, corrugated tube tech</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Call to Action */}
  <div className="text-center mt-12">
    <Link
      to="/products"
      className="inline-flex items-center bg-gradient-to-r from-[#DB1A13] to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-[#b91610] hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      View All Products
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>
</section>


      {/* Services Section */}
<section className="py-12 md:py-16 px-4 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
    TETRA-TECH Engineering – Company Services
  </h2>
  <p className="max-w-3xl mx-auto mb-10 text-center text-md md:text-lg text-gray-700 leading-relaxed">
    TETRA-TECH Engineering (TTE) provides end-to-end automated process solutions tailored for the Food, Dairy, Pharma, Beverage, and Cosmetic industries. Our services span design, manufacturing, installation, and customization of high-performance processing equipment that meets international standards of quality, hygiene, and energy efficiency.
  </p>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
    {/* Custom Machine Design & Manufacturing */}
    <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl border border-gray-100 flex flex-col gap-2 transition-all duration-300">
      <div className="text-blue-600 text-2xl mb-2">🛠️</div>
      <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Custom Machine Design & Manufacturing</h4>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Heat Exchangers</li>
        <li>Pasteurizers</li>
        <li>Hot Water Systems</li>
        <li>Powder Mixing & Blending</li>
        <li>Clean-in-Place (CIP) Modules</li>
        <li className="pt-1 font-medium text-blue-700">
          Custom-engineered to your process, improving efficiency & reducing waste
        </li>
      </ul>
    </div>
    {/* Turnkey Process Solutions */}
    <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl border border-gray-100 flex flex-col gap-2 transition-all duration-300">
      <div className="text-green-600 text-2xl mb-2">🔄</div>
      <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Turnkey Process Solutions</h4>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Milk & Dairy Processing Lines</li>
        <li>Juice & Beverage Production</li>
        <li>Ready-to-Eat Food Solutions</li>
        <li>Chemical & Pharmaceutical Handling</li>
        <li>Pre-heaters, chillers, aseptic & food piping skids</li>
        <li className="pt-1 font-medium text-green-700">
          Complete lines — from concept to commissioning
        </li>
      </ul>
    </div>
    {/* Heat Transfer & Blending Expertise */}
    <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl border border-gray-100 flex flex-col gap-2 transition-all duration-300">
      <div className="text-purple-600 text-2xl mb-2">🌡️</div>
      <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Heat Transfer & Blending Expertise</h4>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Advanced thermal systems</li>
        <li>High-efficiency blending solutions</li>
        <li>For chemical, petrochemical, agrochemical, and pharmaceutical industries</li>
        <li className="pt-1 font-medium text-purple-700">
          Energy-optimized, reliable & hygienic systems
        </li>
      </ul>
    </div>
    {/* Industry-Specific Engineering Consultation */}
    <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl border border-gray-100 flex flex-col gap-2 transition-all duration-300">
      <div className="text-orange-600 text-2xl mb-2">🤝</div>
      <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Industry-Specific Engineering Consultation</h4>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Process optimization consulting</li>
        <li>System integration & technical support</li>
        <li>After-sales and maintenance assistance</li>
        <li className="pt-1 font-medium text-orange-700">
          Boost productivity, hygiene, and ROI — your technical partner
        </li>
      </ul>
    </div>
  </div>
  {/* Why Choose TETRA-TECH */}
  <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 sm:p-8 shadow-lg mt-8">
    <h3 className="font-semibold text-base md:text-xl mb-4 text-gray-800 flex items-center justify-center gap-2">
      <span>🌟</span>Why Choose TETRA-TECH?
    </h3>
    <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-base list-disc list-inside">
      <li><strong>5,000 sq.ft</strong> modern facility near Pune, Maharashtra</li>
      <li><strong>5+ years</strong> hands-on industry experience</li>
      <li>Export-quality machinery and custom-engineered systems</li>
      <li>Client-centric approach & robust service network</li>
    </ul>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-indigo-50 to-purple-50 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="group bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <summary className="cursor-pointer font-medium text-base md:text-lg flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
              <span>What industries do you serve?</span>
              <svg className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">We work with food processing, dairy, chemical, pharma, and renewable energy industries, providing tailored thermal solutions for each sector.</p>
            </div>
          </details>
          
          <details className="group bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <summary className="cursor-pointer font-medium text-base md:text-lg flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
              <span>Can you customize heat exchangers?</span>
              <svg className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Yes, we specialize in custom-built shell & tube exchangers designed specifically based on your unique requirements and operational parameters.</p>
            </div>
          </details>
          
          <details className="group bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <summary className="cursor-pointer font-medium text-base md:text-lg flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
              <span>Do you provide consultation services?</span>
              <svg className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Absolutely! Our experienced team offers comprehensive thermal process engineering consultations to optimize your industrial processes.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Get in Touch</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Address</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Plot No. A130, Loni Deokar MIDC, Indapur, Pune – 413132, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Email</h3>
                  <p className="text-sm md:text-base text-gray-600">mail.purchase@tetetratech.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">WhatsApp</h3>
                  <p className="text-sm md:text-base text-gray-600">+91 73787 51788</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base" 
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Your Message" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-gradient-to-r from-[#DB1A13] to-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-[#b91610] hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
