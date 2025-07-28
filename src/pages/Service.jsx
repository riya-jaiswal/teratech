import React from 'react'

const products = [
  {
    id: 1,
    name: 'Cloud Integration Suite',
    description: 'Seamlessly connect and manage multi-cloud environments with our all-in-one integration platform.',
    price: '$49/mo',
    imageUrl: '/images/cloud-integration.png'
  },
  {
    id: 2,
    name: 'AI Analytics Dashboard',
    description: 'Gain real-time insights with AI-powered analytics and customizable visual reports.',
    price: '$99/mo',
    imageUrl: '/images/ai-analytics.png'
  },
  {
    id: 3,
    name: 'Security Monitoring',
    description: '24/7 threat detection and response to protect your infrastructure and data.',
    price: '$79/mo',
    imageUrl: '/images/security-monitoring.png'
  },
  {
    id: 4,
    name: 'Mobile App Builder',
    description: 'Drag-and-drop builder to create iOS & Android apps without code.',
    price: '$59/mo',
    imageUrl: '/images/mobile-app-builder.png'
  }
]

const Service = () => {
  return (
    <div className="text-gray-800">
      {/* ... existing Hero, About, Contact sections ... */}

      {/* Products Section */}
      <section id="products" className="py-12 md:py-16 bg-white px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Our <span className="text-[#DB1A13]">Products</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#DB1A13]">
                  {product.price}
                </span>
                <button
                  className="bg-[#DB1A13] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#b91610] transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Service
