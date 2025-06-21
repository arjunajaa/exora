export default function About() {
  return (
    <div className="min-h-screen pt-32 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About EXORA</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-medium leading-relaxed">
            A global export brand by PT Langit Raya Eksporindo, connecting Indonesia&apos;s finest products with the world
          </p>
        </div>        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-white/90 text-lg leading-relaxed font-medium mb-6">
              PT Langit Raya Eksporindo was founded with a grand vision to become a leading export company in Indonesia. We believe that export is not merely a business activity, but a mission to elevate local values and strengthen the national economy.
            </p>
            <p className="text-white/80 font-medium leading-relaxed">
              Through our comprehensive understanding of global markets and deep connections with Indonesian producers, we bring together the best of Indonesia to serve international markets with excellence and integrity.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-white/90 text-lg leading-relaxed font-medium mb-6">
              We are committed to becoming a bridge between Indonesian producers and the international market, creating meaningful partnerships that benefit all parties involved.
            </p>
            <p className="text-white/80 font-medium leading-relaxed">
              Behind every transaction, we carry our responsibility to maintain quality, provide exceptional service, and create long-term positive impact for all stakeholders in our global trade network.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality First</h3>
              <p className="text-white/80 font-medium">
                We believe quality is the foundation of reputation. Every product we export meets global standards and is ready to compete in any market.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Partnership</h3>
              <p className="text-white/80 font-medium">
                For us, partners are not just buyers - partners are part of our journey. We support your success from start to finish.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-white/80 font-medium">
                We strengthen Indonesia&apos;s position in international markets while creating meaningful connections that benefit local communities.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-4xl mx-auto">
            &ldquo;EXORA — Uniting local values and global standards, for a world that is more connected and mutually beneficial.&rdquo;
          </p>
          <div className="mt-8 text-white/70 font-medium">
            From trust comes meaningful partnerships. From commitment to local values, EXORA brings Indonesian stories, culture, and quality to the global realm.
          </div>
        </div>
      </div>
    </div>
  );
}
