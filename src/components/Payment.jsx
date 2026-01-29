import React, { useState } from 'react';

const Payment = () => {
  const [activeTab, setActiveTab] = useState('invoice');

  const features = [
    {
      id: 'invoice',
      title: 'Digital Invoicing',
      subtitle: 'Instant Proof of Ownership',
      description: 'Receive an automated, legally compliant digital invoice immediately after purchase. Contains complete details of breed, quantity, livestock cost, and CPF charges.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      id: 'tracking',
      title: 'Order Tracking',
      subtitle: 'Real-Time Updates',
      description: 'Monitor your investment journey with a live timeline. Track every stage from purchase and quarantine checks to final delivery and farm integration.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.126-.504 1.126-1.125V14.25m-17.25 4.5h3.75m-3.75 0H1.5m-1.5-5.625h3m3 0h2.25l2.25 2.25h9l2.25-2.25h2.25m-2.25 0V3.75a1.5 1.5 0 00-1.5-1.5h-5.25a1.5 1.5 0 00-1.5 1.5V12" />
        </svg>
      )
    },
    {
      id: 'history',
      title: 'Order History',
      subtitle: 'Centralized Records',
      description: 'Access your complete investment portfolio in one place. View status updates, download documents, and manage all your transactions seamlessly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-[#f5faf4] to-[#effdf4] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84CC16]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none mix-blend-multiply" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Content - Tabs */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B2C24] mb-4">
                Transparent <span className="text-green-600">Transactions</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Complete visibility from payment to ownership. Manage your livestock investments with banking-grade transparency and ease.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${activeTab === feature.id
                      ? 'bg-white shadow-lg border-green-600 translate-x-2'
                      : 'bg-transparent border-transparent hover:bg-white/50'
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full mt-1 ${activeTab === feature.id ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${activeTab === feature.id ? 'text-[#0B2C24]' : 'text-gray-500'
                        }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm font-medium uppercase tracking-wider mb-2 ${activeTab === feature.id ? 'text-green-600' : 'text-gray-400'
                        }`}>
                        {feature.subtitle}
                      </p>
                      <p className={`text-sm leading-relaxed ${activeTab === feature.id ? 'text-gray-600 block' : 'text-gray-400 hidden md:block'
                        }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="lg:w-1/2">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

              {/* Screen Content */}
              <div className="rounded-[2rem] overflow-hidden bg-white w-full h-full relative flex flex-col">

                {/* Status Bar */}
                <div className="h-8 bg-[#0B2C24] flex justify-between items-center px-6 text-[10px] text-white select-none">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Navbar (Mock) */}
                <div className="h-14 bg-[#0B2C24] flex items-center justify-between px-4 text-white shadow-md z-10">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">←</div>
                  <span className="font-medium tracking-wide">
                    {activeTab === 'invoice' && 'Transaction Invoice'}
                    {activeTab === 'tracking' && 'Order Status'}
                    {activeTab === 'history' && 'My Orders'}
                  </span>
                  <div className="w-6 h-6"></div>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto bg-gray-50 p-4 custom-scrollbar">

                  {/* INVOICE SCREEN */}
                  <div className={`space-y-4 ${activeTab === 'invoice' ? 'animate-slide-in-right' : 'hidden'}`}>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center text-2xl">🐃</div>
                        <div className="text-right">
                          <div className="text-[10px] text-gray-400 text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded">PAID</div>
                        </div>
                      </div>
                      <h3 className="text-center font-bold text-gray-800 text-lg mb-1">Invoice #INV-2024001</h3>
                      <p className="text-center text-xs text-gray-400 mb-6">Jan 21, 2026 • 09:41 AM</p>

                      <div className="space-y-3 border-t border-dashed border-gray-200 pt-4">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Item</span>
                          <span className="font-medium text-gray-800">Murrah Buffalo Unit</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Quantity</span>
                          <span className="font-medium text-gray-800">2 Units</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Base Price</span>
                          <span className="font-medium text-gray-800">₹6,000</span>
                        </div>
                        <div className="flex justify-between text-xs text-green-600">
                          <span>Insurance & Care</span>
                          <span>+ ₹500</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                        <span className="font-bold text-gray-800">Total Paid</span>
                        <span className="font-bold text-xl text-[#0B2C24]">₹6,500</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-[#0B2C24] text-white rounded-lg text-xs font-semibold uppercase tracking-wider shadow-lg">Download PDF</button>
                  </div>

                  {/* TRACKING SCREEN */}
                  <div className={`${activeTab === 'tracking' ? 'animate-slide-in-right' : 'hidden'}`}>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                          <img src="/images/heroimg.jpg" className="w-full h-full object-cover" alt="Livestock" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-800">Murrah Buffalo Batch #42</h4>
                          <p className="text-xs text-gray-500">Order ID: #88219</p>
                          <p className="text-xs text-green-600 font-medium mt-1">Expected: Jan 28</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-4 space-y-8 py-4">
                      {/* Line */}
                      <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gray-200"></div>

                      {[
                        { title: 'Purchase Confirmed', date: 'Jan 20, 10:00 AM', active: true },
                        { title: 'Health Check Passed', date: 'Jan 21, 02:30 PM', active: true },
                        { title: 'Quarantine Started', date: 'In Progress', active: 'current' },
                        { title: 'Out for Delivery', date: 'Pending', active: false },
                      ].map((step, i) => (
                        <div key={i} className="relative flex gap-4 items-start">
                          <div className={`relative z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${step.active === true ? 'bg-green-600 border-green-600 text-white' :
                              step.active === 'current' ? 'bg-white border-green-600 animate-pulse' : 'bg-white border-gray-300'
                            }`}>
                            {step.active === true && <span className="text-[10px]">✓</span>}
                            {step.active === 'current' && <div className="w-2 h-2 bg-green-600 rounded-full"></div>}
                          </div>
                          <div>
                            <h5 className={`text-sm font-bold ${step.active ? 'text-gray-900' : 'text-gray-400'}`}>{step.title}</h5>
                            <p className="text-[10px] text-gray-500">{step.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* HISTORY SCREEN */}
                  <div className={`space-y-3 ${activeTab === 'history' ? 'animate-slide-in-right' : 'hidden'}`}>
                    {[
                      { id: '#INV-001', name: 'Murrah Buffalo', price: '₹50,000', status: 'Completed', color: 'green' },
                      { id: '#INV-002', name: 'Gir Cow Unit', price: '₹25,000', status: 'Processing', color: 'amber' },
                      { id: '#INV-003', name: 'Feed Subscription', price: '₹2,500', status: 'Delivered', color: 'blue' },
                      { id: '#INV-004', name: 'Vet Services', price: '₹1,000', status: 'Completed', color: 'green' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                        <div className="flex gap-3 items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${item.color === 'green' ? 'bg-green-100 text-green-700' :
                              item.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                            {item.color === 'green' ? '✓' : item.color === 'amber' ? '↻' : '📦'}
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-gray-800">{item.name}</h4>
                            <p className="text-[10px] text-gray-400">{item.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-sm text-[#0B2C24]">{item.price}</div>
                          <div className={`text-[9px] font-bold uppercase tracking-wider ${item.color === 'green' ? 'text-green-600' :
                              item.color === 'amber' ? 'text-amber-600' : 'text-blue-600'
                            }`}>{item.status}</div>
                        </div>
                      </div>
                    ))}
                    <button className="w-full text-center text-xs text-gray-400 py-2 hover:text-green-600">View All Transactions</button>
                  </div>

                </div>

                {/* Home Indicator */}
                <div className="h-6 bg-white w-full flex justify-center items-center pb-2">
                  <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Payment;
