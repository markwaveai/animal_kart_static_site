import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Navbar />

            {/* Electric Communication Header - Green Theme */}
            <section className="relative py-20 md:py-32 bg-[#022c22] overflow-hidden flex items-center justify-center min-h-[60vh]">
                
                {/* Background Grid & Glow */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e20_1px,transparent_1px),linear-gradient(to_bottom,#22c55e20_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Text Content */}
                    <div className="text-center md:text-left  mt-12 md:mt-0">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-6 animate-in slide-in-from-bottom-4 duration-700">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                            Live Support
                        </div> */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-none animate-in slide-in-from-bottom-8 duration-700 delay-100">
                            GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">CONNECTED</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200">
                            We are just one click away. Experience seamless support through our digital channels.
                        </p>
                    </div>

                    {/* Right: Electric Animated Graphics */}
                    <div className="relative h-[400px] w-full flex items-center justify-center">
                        
                        {/* Connecting Wave Lines (SVG) */}
                        <svg className="absolute w-full h-full pointer-events-none opacity-50" viewBox="0 0 400 200">
                            <path className="animate-pulse" d="M 50 100 Q 200 50 350 100" stroke="url(#gradient)" strokeWidth="4" fill="none" strokeDasharray="10 5">
                                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                            </path>
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#4ade80" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Floating Devices */}
                        {/* Mobile Phone */}
                        <div className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 w-32 h-60 bg-[#064e3b] border-4 border-green-500/50 rounded-[2rem] shadow-[0_0_30px_rgba(74,222,128,0.3)] flex flex-col items-center justify-between p-4 animate-bounce scale-90 md:scale-100" style={{ animationDuration: '3s' }}>
                            <div className="w-12 h-1 bg-green-800 rounded-full"></div>
                            <div className="space-y-2 w-full">
                                <div className="w-full h-2 bg-green-900 rounded-full"></div>
                                <div className="w-3/4 h-2 bg-green-900 rounded-full"></div>
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-green-500/30 flex items-center justify-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                            </div>
                        </div>

                        {/* Headphones */}
                        <div className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 w-40 h-40 border-[6px] border-emerald-400/50 rounded-full border-b-transparent flex items-center justify-center animate-pulse scale-90 md:scale-100" style={{ animationDuration: '4s' }}>
                            {/* Ear cups */}
                            <div className="absolute left-[-10px] bottom-2 w-8 h-12 bg-[#064e3b] border items-center justify-center rounded-lg border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)]"></div>
                            <div className="absolute right-[-10px] bottom-2 w-8 h-12 bg-[#064e3b] border items-center justify-center rounded-lg border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)]"></div>
                            
                            {/* Sound Waves Icon inside */}
                             <svg className="w-12 h-12 text-emerald-300 animate-spin" style={{ animationDuration: '10s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                            </svg>
                        </div>

                        {/* Connection Bolt */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg className="w-16 h-16 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.6)] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Cards Section - Matching the 3-column UI from image */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                        {/* Visit Us */}
                        <div className="py-16 px-8 text-center flex flex-col items-center group transition-all duration-300 hover:bg-green-50/30">
                            <div className="mb-8 text-[#16a34a] group-hover:scale-110 transition-transform">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-4">Visit Us</h3>
                            <p className="text-sm text-gray-400 mb-6 max-w-[200px] leading-relaxed">
                                Our corporate headquarters is located in the heart of the business district.
                            </p>
                            <a
                                href="https://maps.google.com/?q=206, 2nd Floor, Block-A, Beside PSR Prime Towers, Gachibowli, Hyderabad, 500032"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-bold text-[#16a34a] hover:text-green-700 transition-colors"
                            >
                                206, 2nd Floor, Block-A, Gachibowli, Hyderabad, 500032
                            </a>
                        </div>

                        {/* Call Us */}
                        <div className="py-16 px-8 text-center flex flex-col items-center group transition-all duration-300 hover:bg-green-50/30">
                            <div className="mb-8 text-[#16a34a] group-hover:scale-110 transition-transform">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-4">Call Us</h3>
                            <p className="text-sm text-gray-400 mb-6 max-w-[200px] leading-relaxed">
                                Available Mon-Sat, 9AM - 6PM for all your inquiries and support.
                            </p>
                            <a
                                href="tel:+917702710290"
                                className="text-sm font-bold text-[#16a34a] hover:text-green-700 transition-colors"
                            >
                                +91 7702710290
                            </a>
                        </div>

                        {/* Contact Us */}
                        <div className="py-16 px-8 text-center flex flex-col items-center group transition-all duration-300 hover:bg-green-50/30">
                            <div className="mb-8 text-[#16a34a] group-hover:scale-110 transition-transform">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-4">Contact Us</h3>
                            <p className="text-sm text-gray-400 mb-6 max-w-[200px] leading-relaxed">
                                Send us an email and we will get back to you within 24 hours.
                            </p>
                            <a
                                href="mailto:contact@markwave.ai"
                                className="text-sm font-bold text-[#16a34a] hover:text-green-700 transition-colors"
                            >
                                contact@markwave.ai
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* Full Width Google Map - Matching image */}
            <section className="h-[500px] w-full bg-gray-100 p-0 m-0 overflow-hidden">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.284242698943!2d78.349694375164!3d17.446055983451004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93976f3d97f3%3A0xc348529d892040b0!2sPSR%20Prime%20Towers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
            </section>

            <Footer />

        </div>
    );
};

export default ContactPage;
