const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-white to-[#F0FDF4] overflow-hidden pt-12 md:pt-24 pb-20">
      {/* Top Left Faint Watermark (Floral/Petal) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#84CC16]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 relative z-20 items-center">
        
        {/* Left Side: Image */}
        <div className="w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] md:max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden ">
             <img 
               src="/images/bg.jpeg" 
               alt="About Us" 
               className="w-full h-full object-cover"
             />
            </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-2 font-bricolage tracking-tight">
            About Us
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-[#6fa32c] mb-8 font-logo">
            Who We Are
          </h3>

          <ul className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed font-medium mb-10">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
              <p>
                Animal Kart is a digital livestock investment platform designed to simplify, secure, and scale buffalo ownership through a mobile-first application.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
              <p>
                The platform enables users to invest in high-quality livestock, including fractional ownership, while ensuring complete transparency, risk protection, and end-to-end tracking.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
              <p>
                By combining technology, structured onboarding, transparent pricing, and the Cattle Protection Fund (CPF), Animal Kart bridges the gap between traditional livestock investment and modern digital asset management.
              </p>
            </li>
          </ul>

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col md:flex-row gap-6 items-center shadow-sm border border-gray-100 max-w-xl">
             {/* Icon Square */}
             <div className="bg-[#55831f] w-full md:w-32 h-32 rounded-xl flex items-center justify-center shrink-0">
               <img src="/images/image 1.png" alt="Animal Kart" className="w-16 h-16 object-contain brightness-0 invert" />
             </div>
             
             {/* Text Content */}
             <div className="flex-1">
               <h4 className="text-3xl font-black text-black mb-1">100%</h4>
               <span className="text-[#6fa32c] font-bold text-sm block mb-2">Who We Are</span>
               <p className="text-xs text-gray-600 leading-relaxed">
                 Animal Kart transforms livestock into a digitally managed, protected, and transparent investment you can monitor end-to-end.
               </p>
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Green Banner */}
      <div className="w-full bg-[#487307] py-4 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-widest uppercase font-bricolage">
          AnimalKart
        </h2>
      </div>
    </section>
  );
};

export default About;
