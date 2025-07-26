import React from 'react'

const Service = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="h-[70vh] sm:h-[80vh] bg-gradient-to-r from-[#003366] to-[#0066cc] flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Innovative <span className="text-[#DB1A13]">Technology Solutions</span>
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
          Comprehensive technology solutions tailored to drive your business forward with innovation and excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#our-services"
            className="bg-[#DB1A13] text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition"
          >
            Explore Services
          </a>
          <a
            href="https://wa.me/917378751788"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-white hover:text-[#003366] transition"
          >
            Get Quote
          </a>
        </div>
      </section>

      {/* About Our Services Section */}
      <section id="our-services" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          About Our <span className="text-[#DB1A13]">Services</span>
        </h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          We deliver cutting-edge technology solutions that transform businesses and drive sustainable growth.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Excellence in Every Solution</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              At Tetratech, we combine technical expertise with business insight to deliver solutions that meet your current needs and prepare you for future challenges.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              From consultation to ongoing support, our agile approach ensures successful project delivery and long-term satisfaction.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-[#DB1A13] mb-2">99%</h4>
                <p className="text-sm md:text-base text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-[#DB1A13] mb-2">24/7</h4>
                <p className="text-sm md:text-base text-gray-600">Support Available</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-[#DB1A13] mb-2">100+</h4>
                <p className="text-sm md:text-base text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Approach</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold text-base">1</span>
                </div>
                <div>
                  <h5 className="font-semibold text-base md:text-lg text-gray-800 mb-2">Consultation</h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Understanding your unique requirements and challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold text-base">2</span>
                </div>
                <div>
                  <h5 className="font-semibold text-base md:text-lg text-gray-800 mb-2">Strategy</h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Developing tailored solutions and implementation plans.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold text-base">3</span>
                </div>
                <div>
                  <h5 className="font-semibold text-base md:text-lg text-gray-800 mb-2">Execution</h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Delivering high-quality solutions with ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
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

export default Service