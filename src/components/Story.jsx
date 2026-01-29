import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Story = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white font-sans selection:bg-green-100 selection:text-green-900">

        {/* Hero Section - Lawnella Style */}
        <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/ourstory.jpeg"
              alt="Our Journey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] font-serif">
                The Animal Kart <br />
                <span className="text-white">Journey</span>
              </h1>

              <div className="flex gap-4 mb-10">
                <div className="w-1 bg-green-600 h-auto"></div>
                <p className="text-lg text-gray-200 leading-relaxed font-light max-w-xl">
                  The Animal Kart platform is designed to deliver a simple, secure, and transparent user journey for livestock investment. From first-time onboarding to post-purchase management, every stage is digitized and user-centric.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Light Split Section */}
        <section className="bg-white py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content (Text) */}
            <div className="pr-0 lg:pr-10 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                End to End <span className="text-green-600">User Journey</span>
              </h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  From first-time onboarding to post-purchase management, every stage of the journey is digitized, delivering a seamless experience that bridges the gap between traditional farming and modern investment.
                </p>

                <p className="text-lg leading-relaxed">
                  The Animal Kart platform is designed to deliver a simple, secure, and transparent user journey for livestock investment.
                </p>
                <div className="border-l-4 border-green-600 pl-6 my-8 italic text-gray-500">
                  "We integrate authentication, marketplace discovery, secure payments, and operational tracking, ensuring you have 100% confidence throughout the investment lifecycle."
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Complete Visibility</h3>
                <p className="text-lg leading-relaxed">
                  We pride ourselves on reliability and transparency. Every journey with us is backed by 24/7 support and our guarantee of the best price.
                </p>
              </div>
            </div>

            {/* Right Image (Image) */}
            <div className="relative h-[500px] w-full">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop"
                alt="Lush Garden"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Business Objectives Section - Custom Banner Design */}
        <section className="py-24 px-6 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20 w-full mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2C24] mb-8 font-serif">
                Business Objectives
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                The primary objective of the Animal Kart project is to digitize, standardize, and secure livestock investment through a structured mobile application that bridges traditional farming practices with modern technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 pt-12">
              {[
                {
                  title: "Accessibility & Innovation",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  ),
                  points: [
                    "Enable digital livestock investment with a simple, mobile-first user experience",
                    "Introduce fractional ownership to reduce investment entry barriers",
                    "Support both online and manual payment modes to increase adoption"
                  ]
                },
                {
                  title: "Trust & Transparency",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  ),
                  points: [
                    "Ensure pricing transparency through clear unit, cost, and CPF breakdowns",
                    "Minimize risk through the Cattle Protection Fund (CPF) model",
                    "Provide end-to-end ownership visibility, from purchase to quarantine completion",
                    "Establish trust and compliance through structured KYC and documentation"
                  ]
                },
                {
                  title: "Growth & Scalability",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  ),
                  points: [
                    "Centralize order management, tracking, and invoice generation",
                    "Create a scalable platform that supports repeat investments and asset growth",
                    "Improve customer confidence and retention through transparency and traceability"
                  ]
                }
              ].map((card, i) => (
                <div key={i} className="relative group mt-8">
                  {/* Floating Diamond Icon */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#84CC16] rotate-45 flex items-center justify-center shadow-lg z-20 border-4 border-white group-hover:bg-[#65a30d] transition-colors">
                    <div className="-rotate-45">
                      {card.icon}
                    </div>
                  </div>

                  {/* Banner Card Body */}
                  <div className="bg-[#14532D] pt-16 pb-12 px-8 text-center text-white relative shadow-2xl h-full flex flex-col"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
                  >
                    <h3 className="text-xl font-bold mb-6 font-serif tracking-wider uppercase border-b border-green-700 pb-4">
                      {card.title}
                    </h3>

                    <ul className="space-y-4 text-sm text-green-50 mb-8 flex-grow text-left">
                      {card.points.map((point, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-[#84CC16] font-bold mt-0.5">›</span>
                          <span className="leading-relaxed opacity-90">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Story;
