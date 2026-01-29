import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'emi',
            title: 'EMI Calculator',
            description: 'Calculate your Equated Monthly Installments easily with our advanced calculator tool.',
            url: 'https://dashboard.markwave.ai/emi-calculator',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18m2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-12A2.25 2.25 0 018.25 6z" />
                </svg>
            )
        },
        {
            id: 'buffalo',
            title: 'Buffalo Visualizer',
            description: 'Advanced data visualization tool for tracking buffalo growth and breading patterns.',
            url: 'https://dashboard.markwave.ai/buffalo-viz',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: 'acf',
            title: 'ACF Calculator',
            description: 'Calculate Animal Care Factor metrics to optimize animal health and productivity.',
            url: 'https://dashboard.markwave.ai/acf-calculator',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m14.5-5.5V11m-11 5.5V13" />
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
                </svg>
            )
        },
        {
            id: 'unit-tree',
            title: 'Unit Cal with Tree',
            description: 'Comprehensive unit conversion tool featuring hierarchical tree-based visualization.',
            url: 'https://dashboard.markwave.ai/unit-calculator/73d2a',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18V6m0 0l-4 4m4-4l4 4m-4 12c-4 0-6-2-6-4s2-4 6-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            )
        },
        {
            id: 'unit-plain',
            title: 'Unit Cal without Tree',
            description: 'Simple and fast standard unit conversion tool for quick everyday calculations.',
            url: 'https://dashboard.markwave.ai/unit-calculator/92f1b',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            

            {/* Blue Tech Operations Header */}
            <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden flex items-center justify-center min-h-[50vh] mb-12">
                
                {/* Background Grid & Glow */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Text Content */}
                    <div className="text-center md:text-left">
                         {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 animate-in slide-in-from-bottom-4 duration-700">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                            Premium Tools
                        </div> */}
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none animate-in slide-in-from-bottom-8 duration-700 delay-100">
                           SERVICES
                            {/* OPERATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXCELLENCE</span> */}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200">
                            Explore our site of advanced calculators and tools designed to optimize your livestock investments.
                        </p>
                    </div>

                    {/* Right: Electric Animated Graphics (Gears & Shield) */}
                    <div className="relative h-[400px] w-full flex items-center justify-center">
                        
                        {/* Rotating Gear 1 (Large) */}
                        <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-[4px] border-dashed border-blue-500/30 rounded-full animate-spin-slow flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-blue-500/20"></div>
                        </div>

                        {/* Rotating Gear 2 (Small) */}
                        <div className="absolute right-40 md:right-52 top-1/3 w-32 h-32 border-[4px] border-dashed border-cyan-400/40 rounded-full animate-spin-reverse-slow flex items-center justify-center">
                             <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>

                        {/* Central Shield/Check Icon */}
                        <div className="absolute right-20 md:right-28 top-1/2 -translate-y-1/2 z-10">
                            <div className="relative w-32 h-32 bg-[#0f172a] border-2 border-cyan-400 rounded-2xl rotate-45 shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center overflow-hidden animate-pulse" style={{ animationDuration: '4s' }}>
                                <div className="-rotate-45">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                {/* Shine effect */}
                                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                            </div>
                        </div>

                         {/* Floating Particles */}
                        <div className="absolute right-0 top-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-700"></div>
                        <div className="absolute right-60 bottom-20 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-300"></div>

                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="flex-grow pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setSelectedService(service)}
                                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(74,222,128,0.4)] hover:border-green-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 group relative overflow-hidden"
                            >
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-bricolage group-hover:text-green-700 transition-colors">{service.title}</h3>
                                <p className="text-gray-500 mb-6 leading-relaxed text-sm">{service.description}</p>
                                
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-green-600 uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Open Tool
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6M19.5 10.5H3" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal for Calculator */}
            {selectedService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setSelectedService(null)}></div>
                    <div className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 ring-1 ring-white/20">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                    {selectedService.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 font-bricolage">{selectedService.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-red-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal Content - Iframe */}
                        <div className="flex-grow bg-gray-50">
                            <iframe
                                src={selectedService.url}
                                title={selectedService.title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Services;
