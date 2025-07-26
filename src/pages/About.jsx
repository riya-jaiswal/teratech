import React from 'react'

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="h-[70vh] sm:h-[80vh] bg-gradient-to-r from-[#003366] to-[#0066cc] flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          About <span className="text-[#DB1A13]">Tetratech</span>
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
          Discover our journey, vision, and the exceptional team behind our innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about-company"
            className="bg-[#DB1A13] text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition"
          >
            Learn More
          </a>
          <a
            href="#meet-team"
            className="border-2 border-white text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-white hover:text-[#003366] transition"
          >
            Meet Our Team
          </a>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about-company" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          About Our Company
        </h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Pioneering innovation and excellence in technology solutions since our founding.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Our Story</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Founded to transform businesses through cutting-edge technology, Tetratech has been a leader in innovation for over a decade.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our commitment to excellence makes us a trusted partner for businesses from startups to enterprises.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-[#DB1A13] mb-2">500+</h4>
                <p className="text-sm md:text-base text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-[#DB1A13] mb-2">10+</h4>
                <p className="text-sm md:text-base text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Mission & Vision</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-base md:text-lg text-gray-800 mb-2">Mission</h5>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Empower businesses with innovative technology solutions for sustainable growth.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-base md:text-lg text-gray-800 mb-2">Vision</h5>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Be the global leader in technology innovation, shaping the future of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 px-4 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Why Choose <span className="text-[#DB1A13]">Tetratech</span>
        </h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Discover what sets us apart and makes us the preferred choice for businesses worldwide.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Proven Expertise",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              gradient: "from-blue-500 to-blue-600",
              description: "Over 10 years of industry experience delivering exceptional results.",
            },
            {
              title: "Cutting-Edge Technology",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              gradient: "from-green-500 to-green-600",
              description: "Leveraging the latest technologies for future-ready solutions.",
            },
            {
              title: "24/7 Support",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              gradient: "from-purple-500 to-purple-600",
              description: "Round-the-clock support to ensure systems run smoothly.",
            },
            {
              title: "Cost-Effective",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              gradient: "from-orange-500 to-orange-600",
              description: "Competitive pricing with excellent ROI for all projects.",
            },
            {
              title: "Secure & Reliable",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              gradient: "from-red-500 to-red-600",
              description: "Enterprise-grade security to protect your business and data.",
            },
            {
              title: "Custom Solutions",
              icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4a2 2 0 012-2h4z" />
                </svg>
              ),
              gradient: "from-teal-500 to-teal-600",
              description: "Tailored solutions designed for your business needs.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="group bg-white shadow-lg hover:shadow-2xl p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-3 leading-tight">{feature.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="meet-team" className="py-12 md:py-16 px-4 md:px-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Meet Our <span className="text-[#DB1A13]">Expert Team</span>
        </h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Get to know the talented professionals who make our success possible.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "John Smith",
              role: "CEO & Founder",
              description: "Visionary leader with 15+ years in technology and business strategy.",
              gradient: "from-blue-500 to-blue-600",
            },
            {
              name: "Sarah Johnson",
              role: "CTO",
              description: "Technology expert specializing in scalable solutions.",
              gradient: "from-red-500 to-red-600",
            },
            {
              name: "Michael Chen",
              role: "Lead Developer",
              description: "Full-stack developer with expertise in modern frameworks.",
              gradient: "from-blue-500 to-blue-600",
            },
            {
              name: "Emily Davis",
              role: "Project Manager",
              description: "Expert in project coordination and client relations.",
              gradient: "from-red-500 to-red-600",
            },
          ].map((member, idx) => (
            <div key={idx} className="group bg-white shadow-lg hover:shadow-2xl p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-full h-48 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-2">{member.name}</h3>
              <p className="text-[#DB1A13] font-semibold text-sm md:text-base mb-2">{member.role}</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
  <div className="text-center mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg">
  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">Ready to Work With Us?</h3>
  <p className="text-sm md:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
    Let's discuss how our team can help bring your vision to life.
  </p>
  <a
    href="https://wa.me/917378751788"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-[#DB1A13] to-red-600 text-white px-5 py-2.5 text-base font-semibold rounded-full hover:from-[#b91610] hover:to-red-700 transition-all duration-300"
  >
    Get In Touch
  </a>
</div>
      </section>
    </div>
  )
}

export default About