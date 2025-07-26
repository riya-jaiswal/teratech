import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Controlled Desktop Sizing */}
      <section className="relative bg-gradient-to-r from-[#003366] to-[#0066cc] text-white py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Contact <span className="text-[#DB1A13]">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with our expert team and let's bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="#contact-form"
                className="bg-[#DB1A13] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </a>
              <a
                href="tel:+917378751788"
                className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details & Form Section - Better Desktop Control */}
      <section id="contact-form" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003366] mb-4 sm:mb-6">
              Get In <span className="text-[#DB1A13]">Touch</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you succeed. Reach out to us through any of the channels below
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
            
            {/* Left Side - Contact Details */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003366] mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Ready to take your business to the next level? We're here to help you every step of the way.
                </p>
              </div>

              {/* Contact Cards - Optimized Sizing */}
              <div className="space-y-4 sm:space-y-6">
                
                {/* Phone */}
                <div className="flex items-start space-x-4 lg:space-x-5 p-4 sm:p-6 lg:p-7 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#DB1A13] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#003366] mb-1 sm:mb-2">
                      Phone Number
                    </h4>
                    <a 
                      href="tel:+917378751788"
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 hover:text-[#DB1A13] transition-colors"
                    >
                      +91 7378751788
                    </a>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mt-1">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 lg:space-x-5 p-4 sm:p-6 lg:p-7 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#003366] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#003366] mb-1 sm:mb-2">
                      Email Address
                    </h4>
                    <a 
                      href="mailto:info@tetratech.com"
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 hover:text-[#DB1A13] transition-colors"
                    >
                      info@tetratech.com
                    </a>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 lg:space-x-5 p-4 sm:p-6 lg:p-7 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#25D366] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#003366] mb-1 sm:mb-2">
                      WhatsApp
                    </h4>
                    <a 
                      href="https://wa.me/917378751788"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 hover:text-[#DB1A13] transition-colors"
                    >
                      +91 7378751788
                    </a>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mt-1">
                      Instant messaging available
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 lg:space-x-5 p-4 sm:p-6 lg:p-7 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#DB1A13] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#003366] mb-1 sm:mb-2">
                      Office Address
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      123 Tech Street, Business District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form - Controlled Sizing */}
            <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003366] mb-4 sm:mb-6">
                Send Us a Message
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-semibold text-[#003366] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-300 rounded-full focus:border-[#DB1A13] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-semibold text-[#003366] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-300 rounded-full focus:border-[#DB1A13] focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base md:text-lg font-semibold text-[#003366] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-300 rounded-full focus:border-[#DB1A13] focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base md:text-lg font-semibold text-[#003366] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-300 rounded-full focus:border-[#DB1A13] focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-semibold text-[#003366] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-300 rounded-xl focus:border-[#DB1A13] focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#DB1A13] text-white py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Integration Section - Controlled Height */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003366] mb-4 sm:mb-6">
              Find <span className="text-[#DB1A13]">Our Office</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visit us at our office or schedule a meeting to discuss your project in person
            </p>
          </div>

          {/* Map Container - Controlled Desktop Height */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9942415259437!2d72.82266801744384!3d19.04591708711033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9e7c3b6b1d%3A0x3b3b3b3b3b3b3b3b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tetratech Office Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map Overlay - Better Desktop Sizing */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 bg-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg max-w-xs sm:max-w-sm lg:max-w-md">
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#003366] mb-2">
                Tetratech Office
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                123 Tech Street<br />
                Business District<br />
                Mumbai, Maharashtra 400001
              </p>
              <div className="mt-3 sm:mt-4">
                <a
                  href="https://maps.google.com/?q=Mumbai,Maharashtra,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#DB1A13] hover:text-[#b91610] transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                >
                  Get Directions
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Final CTA - Better Desktop Control */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-xl p-6 sm:p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
              Still Have Questions?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Our team is ready to help you with any questions or concerns you may have
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="https://wa.me/917378751788"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#DB1A13] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-[#b91610] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:info@tetratech.com"
                className="border-2 border-white text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
