import { useState, useEffect } from 'react';

const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const solutions = [
    {
      title: "Digital Marketplace",
      desc: "Browse verified livestock with clear unit composition, pricing, and availability.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-green-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.74-.39 2.25-1.016.51.626 1.354 1.016 2.25 1.016.91 0 1.794-.39 2.306-1.042.48.566 1.258.98 2.112 1.042m-16.5 0a3.004 3.004 0 01-.621-4.72l1.189-1.19A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      )
    },
    {
      title: "Fractional Ownership",
      desc: "Invest in livestock through flexible units, lowering entry barriers for investors.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-amber-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    },
    {
      title: "Cattle Protection Fund",
      desc: "Built-in risk protection ensuring asset safety and long-term value.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      desc: "Auto-calculated cost breakdowns with savings clearly displayed.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-emerald-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secure Onboarding",
      desc: "Structured registration to ensure legal ownership and compliance.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-purple-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      title: "Flexible Payments",
      desc: "Online payments and manual modes (bank transfer & cheque).",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-orange-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      )
    },
    {
      title: "Order Tracking",
      desc: "End-to-end visibility with status tracking and downloadable invoices.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-indigo-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(5);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else setVisibleCount(1);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const next = () => {
    if (currentIndex < solutions.length - visibleCount) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <section id="solution" className="max-w-7xl mx-auto px-6 py-16 rounded-3xl bg-gradient-to-br from-white via-[#f5faf4] to-[#e8f7e7] shadow-sm overflow-hidden">
      <div className="mb-16 flex flex-col md:flex-row gap-10 md:items-start justify-between">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-serif">Solution Overview</h2>
        </div>
        <div className="md:w-2/3 flex gap-4">
          <div className="w-1 bg-green-600 h-auto shrink-0"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Animal Kart provides a digital, end-to-end livestock investment platform that enables users to invest in buffaloes through a secure, transparent, and mobile-first application. The solution simplifies livestock ownership by combining fractional investment, risk protection, and real-time tracking.
          </p>
        </div>
      </div>

      <div className="relative group/carousel px-0 md:px-4">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / (visibleCount || 1))}%)`,
              gap: visibleCount > 1 ? '1.5rem' : '0'
            }}
          >
            {solutions.map((item, i) => (
              <div
                key={i}
                className="shrink-0 transition-all duration-300 px-4 md:px-0"
                style={{
                  width: visibleCount > 1
                    ? `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)`
                    : '100%'
                }}
              >
                <div
                  className={`
                    p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer group/card h-full flex flex-col items-center text-center relative overflow-hidden
                    ${i === currentIndex + Math.floor(visibleCount / 2)
                      ? 'bg-green-700 text-white [&_svg]:text-white shadow-lg shadow-green-900/20 active-card'
                      : 'bg-white border-t-4 border-green-600 hover:-translate-y-2'
                    }
                  `}
                >
                  <div className={`
                    mb-6 w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-colors
                    ${i === currentIndex + Math.floor(visibleCount / 2) ? 'bg-white/20' : 'bg-green-50 group-hover/card:bg-green-100'}
                  `}>
                    {item.icon}
                  </div>
                  <h3 className={`
                    text-xl font-bold font-serif mb-3 transition-colors
                    ${i === currentIndex + Math.floor(visibleCount / 2) ? 'text-white' : 'text-gray-900 group-hover/card:text-green-700'}
                  `}>
                    {item.title}
                  </h3>
                  <p className={`
                    text-sm leading-relaxed flex-grow
                    ${i === currentIndex + Math.floor(visibleCount / 2) ? 'text-green-50' : 'text-gray-500'}
                  `}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Using group-hover for visibility on desktop, always visible on mobile if needed */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-gray-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Previous card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        )}

        {currentIndex < solutions.length - visibleCount && (
          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-gray-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Next card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
      </div>

      {/* Pagination dots for mobile */}
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {Array.from({ length: solutions.length - visibleCount + 1 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Solution;
