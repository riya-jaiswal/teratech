import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Same as Home page */}
      <section className="relative bg-gradient-to-r from-[#003366] to-[#0066cc] text-white py-20 lg:py-32 xl:py-40 2xl:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-8 xl:mb-10 leading-tight">
              About <span className="text-[#DB1A13]">Tetratech</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-8 lg:mb-12 xl:mb-16 opacity-90 leading-relaxed">
              Discover our journey, vision, and the exceptional team behind our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
              <a
                href="#about-company"
                className="bg-[#DB1A13] text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
              <a
                href="#meet-team"
                className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about-company" className="py-16 lg:py-24 xl:py-32 2xl:py-40 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#003366] mb-6 lg:mb-8">
                About Our Company
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Pioneering innovation and excellence in technology solutions since our founding
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="space-y-6 lg:space-y-8 xl:space-y-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Our Story
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
                  Founded with a vision to transform businesses through cutting-edge technology, Tetratech has been at the forefront of innovation for over a decade. We specialize in delivering comprehensive solutions that drive growth and efficiency.
                </p>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
                  Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses across various industries, from startups to enterprise-level organizations.
                </p>
                
                {/* Company Stats */}
                <div className="grid grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-12">
                  <div className="text-center">
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#DB1A13] mb-2">500+</h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#DB1A13] mb-2">10+</h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-[#003366] rounded-2xl p-8 lg:p-12 xl:p-16 text-white">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8">Our Mission</h4>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                    To empower businesses with innovative technology solutions that drive sustainable growth and competitive advantage.
                  </p>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8">Our Vision</h4>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                    To be the global leader in technology innovation, creating solutions that shape the future of business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 xl:py-32 2xl:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#003366] mb-6 lg:mb-8">
                Why Choose <span className="text-[#DB1A13]">Tetratech</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover what sets us apart and makes us the preferred choice for businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
              {/* Feature 1 */}
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-[#DB1A13] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Proven Expertise
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                  Over 10 years of industry experience with a track record of delivering exceptional results for our clients.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-[#DB1A13] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Cutting-Edge Technology
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                  We leverage the latest technologies and innovative approaches to deliver future-ready solutions.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-[#DB1A13] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  24/7 Support
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                  Round-the-clock support and maintenance to ensure your systems run smoothly at all times.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-[#DB1A13] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Cost-Effective
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                  Competitive pricing with transparent costs and excellent return on investment for all projects.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-[#DB1A13] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Secure & Reliable
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                  Enterprise-grade security and reliability standards to protect your business and data.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-[#DB1A13] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4a2 2 0 012-2h4z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-4 lg:mb-6">
                  Custom Solutions
                </h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                  Tailored solutions designed specifically for your business needs and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="meet-team" className="py-16 lg:py-24 xl:py-32 2xl:py-40 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16 xl:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#003366] mb-6 lg:mb-8">
                Meet Our <span className="text-[#DB1A13]">Expert Team</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get to know the talented professionals who make our success possible
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
              {/* Team Member 1 */}
              <div className="text-center group">
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-2xl">
                  <div className="w-full h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-[#003366] to-[#0066cc] flex items-center justify-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#003366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-2 lg:mb-4">
                  John Smith
                </h3>
                <p className="text-[#DB1A13] font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mb-3 lg:mb-4">
                  CEO & Founder
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                  Visionary leader with 15+ years of experience in technology innovation and business strategy.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center group">
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-2xl">
                  <div className="w-full h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-[#DB1A13] to-[#ff4444] flex items-center justify-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#DB1A13]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-2 lg:mb-4">
                  Sarah Johnson
                </h3>
                <p className="text-[#DB1A13] font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mb-3 lg:mb-4">
                  CTO
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                  Technology expert specializing in scalable solutions and innovative development practices.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center group">
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-2xl">
                  <div className="w-full h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-[#003366] to-[#0066cc] flex items-center justify-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#003366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-2 lg:mb-4">
                  Michael Chen
                </h3>
                <p className="text-[#DB1A13] font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mb-3 lg:mb-4">
                  Lead Developer
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                  Full-stack developer with expertise in modern frameworks and cloud technologies.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center group">
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-2xl">
                  <div className="w-full h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-[#DB1A13] to-[#ff4444] flex items-center justify-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#DB1A13]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-2 lg:mb-4">
                  Emily Davis
                </h3>
                <p className="text-[#DB1A13] font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mb-3 lg:mb-4">
                  Project Manager
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                  Expert in project coordination and client relations with a focus on delivering excellence.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 lg:mt-24 xl:mt-32">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-6 lg:mb-8">
                Ready to Work With Us?
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our team can help bring your vision to life
              </p>
              <a
                href="https://wa.me/917378751788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#DB1A13] text-white px-8 sm:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

