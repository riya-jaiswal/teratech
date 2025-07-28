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
          Innovative Heat Exchange. <br /> Reliable Engineering.
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
          We specialize in designing and manufacturing shell & tube heat exchangers and thermal process skids.
          With an unwavering commitment to performance, reliability, and energy efficiency, we serve industries like
          food processing, dairy, chemical, and renewable energy.
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
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">Deliver reliable and efficient thermal engineering solutions that power industrial growth sustainably.</p>
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
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">To be a global leader in heat exchange innovation through quality, safety, and performance excellence.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 px-4 md:px-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Our Products</h2>
        <p className="text-base md:text-lg text-center max-w-2xl mx-auto text-gray-600 mb-12 leading-relaxed">
          Discover our range of high-performance thermal solutions designed for industrial excellence
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Product 1 */}
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              🔄
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center">Shell & Tube Heat Exchangers</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed text-center">
              High-efficiency heat transfer solutions with robust design for demanding industrial applications.
            </p>
            <div className="space-y-2 text-xs md:text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>TEMA Standards Compliant</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Custom Tube Configurations</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Corrosion Resistant Materials</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              ⚙️
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center">Thermal Process Skids</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed text-center">
              Complete skid-mounted thermal systems for streamlined installation and operation.
            </p>
            <div className="space-y-2 text-xs md:text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Plug & Play Installation</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Integrated Control Systems</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Space-Optimized Design</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              🔧
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center">Heat Recovery Systems</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed text-center">
              Energy-efficient waste heat recovery solutions to optimize your process economics.
            </p>
            <div className="space-y-2 text-xs md:text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                <span>Up to 90% Heat Recovery</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                <span>Reduced Energy Costs</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                <span>Environmental Compliance</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              🏭
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center">Stainless Steel Fabrication</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed text-center">
              Custom stainless steel components and assemblies for food-grade and pharmaceutical applications.
            </p>
            <div className="space-y-2 text-xs md:text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                <span>Food Grade Finish</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                <span>316L Stainless Steel</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                <span>Precision Welding</span>
              </div>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Our Core Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Shell & Tube Heat Exchanger Manufacturing",
              icon: "🔧",
              gradient: "from-blue-500 to-blue-600"
            },
            { 
              title: "Skid-Based Thermal System Design",
              icon: "⚡",
              gradient: "from-green-500 to-green-600"
            },
            { 
              title: "Heat Exchanger Repair & Retubing",
              icon: "🔨",
              gradient: "from-purple-500 to-purple-600"
            },
            { 
              title: "Thermal Process Engineering Consultation",
              icon: "📊",
              gradient: "from-orange-500 to-orange-600"
            },
            { 
              title: "Customized Stainless Steel Fabrication",
              icon: "🏭",
              gradient: "from-red-500 to-red-600"
            },
            { 
              title: "Energy-Efficient Heat Recovery",
              icon: "♻️",
              gradient: "from-teal-500 to-teal-600"
            }
          ].map((service, idx) => (
            <div key={idx} className="group bg-white shadow-lg hover:shadow-2xl p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-3 leading-tight">{service.title}</h4>
              <div className={`h-1 w-10 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-full transition-all duration-300`}></div>
            </div>
          ))}
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
