import React from 'react'

const Service = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#003366] to-[#0066cc] text-white py-20 lg:py-32 xl:py-40 2xl:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-8 xl:mb-10 leading-tight">
              Our <span className="text-[#DB1A13]">Services</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-8 lg:mb-12 xl:mb-16 opacity-90 leading-relaxed">
              Comprehensive technology solutions tailored to drive your business forward with innovation and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
              <a
                href="#our-services"
                className="bg-[#DB1A13] text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/917378751788"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Services Section */}
      <section id="our-services" className="py-16 lg:py-24 xl:py-32 2xl:py-40 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#003366] mb-6 lg:mb-8">
                About Our <span className="text-[#DB1A13]">Services</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We deliver cutting-edge technology solutions that transform businesses and drive sustainable growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-16 lg:mb-24 xl:mb-32">
              <div className="space-y-6 lg:space-y-8 xl:space-y-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Excellence in Every Solution
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
                  At Tetratech, we combine technical expertise with business insight to deliver solutions that not only meet your current needs but also prepare you for future challenges. Our comprehensive service portfolio covers every aspect of digital transformation.
                </p>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
                  From initial consultation to ongoing support, we work closely with our clients to ensure successful project delivery and long-term satisfaction. Our agile approach and commitment to quality make us your ideal technology partner.
                </p>
                
                {/* Service Stats */}
                <div className="grid grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12">
                  <div className="text-center">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#DB1A13] mb-2">99%</h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#DB1A13] mb-2">24/7</h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">Support Available</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#DB1A13] mb-2">100+</h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-[#003366] rounded-2xl p-8 lg:p-12 xl:p-16 text-white">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8">Our Approach</h4>
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DB1A13] w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm lg:text-base">1</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Consultation</h5>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-90">Understanding your unique requirements and challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DB1A13] w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm lg:text-base">2</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Strategy</h5>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-90">Developing tailored solutions and implementation plans</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DB1A13] w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm lg:text-base">3</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Execution</h5>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-90">Delivering high-quality solutions with ongoing support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16 lg:py-24 xl:py-32 2xl:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#003366] mb-6 lg:mb-8">
                Our Complete <span className="text-[#DB1A13]">Service Portfolio</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions to meet all your technology and business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
              
              {/* Service 1 - Web Development */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 xl:p-10 border hover:border-[#DB1A13] group">
                <div className="bg-gradient-to-r from-[#DB1A13] to-[#ff4444] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Web Development
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Custom websites and web applications built with modern technologies for optimal performance and user experience.
                </p>
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Performance Optimization
                  </li>
                </ul>
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DB1A13] text-white py-3 lg:py-4 rounded-full font-semibold hover:bg-[#b91610] transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Get Started
                </a>
              </div>

              {/* Service 2 - Mobile App Development */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 xl:p-10 border hover:border-[#DB1A13] group">
                <div className="bg-gradient-to-r from-[#003366] to-[#0066cc] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Mobile App Development
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
                </p>
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    iOS & Android
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cross-Platform Solutions
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    App Store Deployment
                  </li>
                </ul>
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DB1A13] text-white py-3 lg:py-4 rounded-full font-semibold hover:bg-[#b91610] transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Get Started
                </a>
              </div>

              {/* Service 3 - E-commerce Solutions */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 xl:p-10 border hover:border-[#DB1A13] group">
                <div className="bg-gradient-to-r from-[#DB1A13] to-[#ff4444] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  E-commerce Solutions
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Complete online store solutions with secure payment processing and inventory management systems.
                </p>
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Payment Integration
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Inventory Management
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Analytics Dashboard
                  </li>
                </ul>
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DB1A13] text-white py-3 lg:py-4 rounded-full font-semibold hover:bg-[#b91610] transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Get Started
                </a>
              </div>

              {/* Service 4 - Digital Marketing */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 xl:p-10 border hover:border-[#DB1A13] group">
                <div className="bg-gradient-to-r from-[#003366] to-[#0066cc] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Digital Marketing
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Comprehensive digital marketing strategies to boost your online presence and drive business growth.
                </p>
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO & SEM
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Content Marketing
                  </li>
                </ul>
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DB1A13] text-white py-3 lg:py-4 rounded-full font-semibold hover:bg-[#b91610] transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Get Started
                </a>
              </div>

              {/* Service 5 - Cloud Solutions */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 xl:p-10 border hover:border-[#DB1A13] group">
                <div className="bg-gradient-to-r from-[#DB1A13] to-[#ff4444] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Cloud Solutions
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.
                </p>
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cloud Migration
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Infrastructure Setup
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 Monitoring
                  </li>
                </ul>
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DB1A13] text-white py-3 lg:py-4 rounded-full font-semibold hover:bg-[#b91610] transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Get Started
                </a>
              </div>

              {/* Service 6 - IT Consulting */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 xl:p-10 border hover:border-[#DB1A13] group">
                <div className="bg-gradient-to-r from-[#003366] to-[#0066cc] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  IT Consulting
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.
                </p>
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Technology Assessment
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strategic Planning
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#DB1A13] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Implementation Support
                  </li>
                </ul>
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DB1A13] text-white py-3 lg:py-4 rounded-full font-semibold hover:bg-[#b91610] transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 lg:mt-24 xl:mt-32 bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-2xl p-8 lg:p-12 xl:p-16 text-white">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                Let's discuss your project requirements and find the perfect solution for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <a
                  href="https://wa.me/917378751788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DB1A13] text-white px-8 sm:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                </a>
                <a
                  href="tel:+917378751788"
                  className="border-2 border-white text-white px-8 sm:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service

