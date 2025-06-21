export default function Contact() {
  return (
    <div className="min-h-screen pt-32 px-4 font-poppins">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact EXORA</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium">
            Ready to explore premium Indonesian products for your market? Let&apos;s discuss how we can support your business growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6282235490564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30 hover:bg-gradient-to-r hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
                  <p className="text-white/80 text-sm">Chat with us instantly</p>
                </div>
              </a>

              {/* Email Button */}
              <a
                href="mailto:langitrayaeksporindo@gmail.com"
                className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-white/80 text-sm">Send us an email</p>
                </div>
              </a>
            </div>

            {/* Company Info */}
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">PT Langit Raya Eksporindo</h3>
              <p className="text-white/80 font-medium">Global Export Solutions</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/10 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Monday - Friday</h4>
                <p className="text-white/80">8:00 AM - 6:00 PM</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Saturday</h4>
                <p className="text-white/80">9:00 AM - 4:00 PM</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Sunday</h4>
                <p className="text-white/80">Closed</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-6 text-center">*All times are in WIB (UTC+7)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
