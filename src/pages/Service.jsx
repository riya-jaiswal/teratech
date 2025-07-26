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
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Our Core <span className="text-[#DB1A13]">Services</span>
        </h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Comprehensive solutions to meet all your technology and business needs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Web Development",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              gradient: "from-blue-500 to-blue-600",
              description: "Custom websites and web applications built for performance and user experience.",
              features: ["Responsive Design", "SEO Optimization", "Performance Optimization"],
            },
            {
              title: "Mobile App Development",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ),
              gradient: "from-green-500 to-green-600",
              description: "Native and cross-platform apps delivering exceptional user experiences.",
              features: ["iOS & Android", "Cross-Platform Solutions", "App Store Deployment"],
            },
            {
              title: "E-commerce Solutions",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              ),
              gradient: "from-purple-500 to-purple-600",
              description: "Complete online store solutions with secure payment and inventory systems.",
              features: ["Payment Integration", "Inventory Management", "Analytics Dashboard"],
            },
            {
              title: "Digital Marketing",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              ),
              gradient: "from-orange-500 to-orange-600",
              description: "Strategies to boost your online presence and drive business growth.",
              features: ["SEO & SEM", "Social Media Marketing", "Content Marketing"],
            },
            {
              title: "Cloud Solutions",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              ),
              gradient: "from-red-500 to-red-600",
              description: "Scalable cloud infrastructure to optimize operations and reduce costs.",
              features: ["Cloud Migration", "Infrastructure Setup", "24/7 Monitoring"],
            },
            {
              title: "IT Consulting",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              gradient: "from-teal-500 to-teal-600",
              description: "Strategic consulting to optimize your IT infrastructure and decisions.",
              features: ["Technology Assessment", "Strategic Planning", "Implementation Support"],
            },
          ].map((service, idx) => (
            <div key={idx} className="group bg-white shadow-lg hover:shadow-2xl p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-3 leading-tight">{service.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm md:text-base text-gray-600">
                    <svg className="w-4 h-4 text-[#DB1A13] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/917378751788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gradient-to-r from-[#DB1A13] to-red-600 text-white py-3 rounded-xl font-semibold hover:from-[#b91610] hover:to-red-700 transition-all duration-300 text-sm md:text-base"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917378751788"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#DB1A13] to-red-600 text-white px-5 py-2.5 text-base font-semibold rounded-full hover:from-[#b91610] hover:to-red-700 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="tel:+917378751788"
              className="border-2 border-white text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-white hover:text-[#003366] transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service