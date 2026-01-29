import React from 'react';

const ReferralSection = () => {
  return (
    <section className="py-12 px-6 bg-green-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-800 mb-6 leading-tight uppercase">
                Referral & <br /> Rewards System
              </h2>
              
              <div className="inline-flex items-center gap-2 bg-[#FDF6B2] text-[#723B13] px-4 py-2 rounded-lg font-bold mb-8 transform -rotate-1 shadow-sm">
                <span>🌱</span> Grow Together
              </div>

              <ul className="space-y-4 mb-10 text-gray-700 text-sm leading-relaxed">
                  <li className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 mt-1 shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <p>The Referral & Rewards system encourages user growth through trusted referrals within the Animal Kart platform.</p>
                  </li>
                  <li className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 mt-1 shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <p>Existing users can refer new users to the platform using a referral mechanism during registration.</p>
                  </li>
                  <li className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 mt-1 shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <p>Referred users complete OTP verification and KYC, ensuring secure and compliant onboarding.</p>
                  </li>
                  <li className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 mt-1 shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <p>Successful referrals help expand the platform’s verified user base while maintaining trust and authenticity.</p>
                  </li>
                  <li className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 mt-1 shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <p>The system supports controlled and traceable onboarding, ensuring referrals align with business and compliance requirements.</p>
                  </li>
                   <li className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 mt-1 shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <p>This feature strengthens user engagement, organic growth, and community-driven adoption.</p>
                  </li>
              </ul>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#218E8B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4a5833] transition-colors shadow-lg shadow-[#5B6C40]/20 uppercase tracking-widest text-sm">
                  Start Referring
                </button>
                <button className="bg-transparent border-2 border-[#218E8B] text-[#218E8B] px-8 py-4 rounded-full font-bold hover:bg-[#218E8B] hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Learn More
                </button>
              </div> */}
            </div>

            {/* Right Image */}
            <div className="relative h-[600px] hidden md:flex items-center justify-center">
              <img 
                src="/images/coins.png" 
                alt="Refer and Earn" 
                className="w-full h-full object-contain z-20 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
