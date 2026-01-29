const Process = () => {
  const steps = [
    { 
      title: "Consultation", 
      desc: "Expert guidance to help you choose the right livestock investment for your goals."
    },
    { 
      title: "Investment", 
      desc: "Secure and transparent purchase process with complete documentation ownership."
    },
    { 
      title: "Monitoring", 
      desc: "Real-time updates on your livestock's health, location, and growth milestones."
    }
  ];

  return (
    <section className="bg-[#F7FBF2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            
            <h2 className="text-5xl md:text-6xl font-black text-[#0f2e18] mb-6 font-logo tracking-tight">
              Why Choose <span className="text-[#6fa32c]">Us?</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
              The Best Choice For Your Experience. We provide a seamless, transparent, and profitable journey for your livestock investments using modern technology and expert care.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Icon Box */}
                  <div className="shrink-0 w-16 h-16 bg-[#4a7218] rounded-2xl flex items-center justify-center shadow-lg hover:bg-[#3d5e14] transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="white" 
                      className="w-8 h-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9.135-9.135" />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-[#0f2e18] mb-2 font-logo">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2 max-w-sm">
                      {step.desc}
                    </p>
                    {/* <button className="text-[#6fa32c] text-sm font-bold border-b border-[#6fa32c] self-start hover:text-[#5e8b25] hover:border-[#5e8b25] transition-colors">
                      Read More...
                    </button> */}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="relative h-[600px] lg:h-auto w-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/image 3.png" 
              alt="Buffalo in water" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient overlay for slight depth if needed, matches reference contrast */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
