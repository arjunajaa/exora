'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Deteksi mobile dan delay loading video
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Untuk mobile, tunggu 3 detik sebelum load video
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      // Desktop langsung show video
      setShowVideo(true);
    }
  }, []);

  return (
    <div className="min-h-screen font-poppins pt-24">
      {/* Hero Section with Video Background */}
      <section className="min-h-screen flex items-center justify-center px-4 -mt-24 relative overflow-hidden">
        {/* Video Background dengan optimasi mobile */}
        <div className="absolute inset-0 z-0">
          {/* Fallback background image untuk loading dan mobile yang lambat */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-indigo-900/60"></div>
          
          {/* Loading indicator untuk mobile */}
          {!showVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/60 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/60 mx-auto mb-2"></div>
                <p className="text-sm">Loading experience...</p>
              </div>
            </div>
          )}
          
          {/* Video hanya load ketika showVideo true */}
          {showVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-0 transition-opacity duration-2000"
              onLoadedData={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
          )}
          
          {/* Dark overlay untuk readability - dikurangi opacity */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            EXORA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl font-medium drop-shadow-lg">
            Connecting Indonesia&apos;s Finest Products with the Global Market
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl font-medium drop-shadow-lg">
            Premium export solutions bringing quality Indonesian commodities, frozen products, and eco-friendly goods to international partners worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/product" 
              className="bg-white/25 hover:bg-white/35 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-lg border border-white/40 hover:scale-105 shadow-xl"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Product Categories
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium">
              Discover our comprehensive range of premium Indonesian products, carefully selected and processed to meet international standards
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Product 1 - Natural Ingredients */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="/catalog/rempah rempah.jpg" 
                  alt="Natural Ingredients - Spices and Herbs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Natural Ingredients</h3>
                <p className="text-white/80 font-medium mb-6 leading-relaxed">
                  Premium spices, herbs, coconut products, coffee, and tea sourced from Indonesia&apos;s fertile lands and trusted farmers.
                </p>
                <Link href="/product" className="flex items-center text-green-300 font-semibold hover:text-green-200 transition-colors">
                  <span>View Products</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product 2 - Frozen Selection */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="/catalog/frozenfood.jpg" 
                  alt="Premium Frozen Selection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Premium Frozen</h3>
                <p className="text-white/80 font-medium mb-6 leading-relaxed">
                  High-quality frozen seafood, vegetables, and fruits with preserved freshness for international food service and retail.
                </p>
                <Link href="/product" className="flex items-center text-blue-300 font-semibold hover:text-blue-200 transition-colors">
                  <span>View Products</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product 3 - Asian Grocery */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="/catalog/grocery.jpg" 
                  alt="Asian Grocery and Daily Needs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Asian Grocery</h3>
                <p className="text-white/80 font-medium mb-6 leading-relaxed">
                  Ready-to-sell Indonesian food products, instant seasonings, and traditional beverages for retail markets worldwide.
                </p>
                <Link href="/product" className="flex items-center text-orange-300 font-semibold hover:text-orange-200 transition-colors">
                  <span>View Products</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <Link 
              href="/product" 
              className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-lg border border-white/30 hover:scale-105"
            >
              <span>Show More Categories</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose EXORA Section */}
      <section className="py-32 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose EXORA?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium">
              We&apos;re more than just an export company - we&apos;re your trusted partner in connecting Indonesian excellence with global opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Quality Products */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality Products</h3>
              <p className="text-white/80 font-medium">
                We provide only high-quality products that comply with international standards, ensuring consistency and excellence in every shipment to build long-term trust with our partners.
              </p>
            </div>

            {/* Feature 2 - Flexible Service */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Service</h3>
              <p className="text-white/80 font-medium">
                We offer customized solutions including flexible packaging options, competitive pricing, and personalized service approaches to meet the unique needs of each client.
              </p>
            </div>

            {/* Feature 3 - Export Experience */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Export Experience</h3>
              <p className="text-white/80 font-medium">
                With extensive experience in international trade, we handle all export procedures professionally, from documentation to delivery, ensuring smooth and efficient transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
