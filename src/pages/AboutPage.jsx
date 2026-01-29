import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const AboutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            title: "Transparency",
            desc: "We believe in full visibility, from livestock sourcing to real-time farm monitoring.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            )
        },
        {
            title: "Sustainability",
            desc: "Our practices promote environmental health and long-term agricultural viability.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25v1.5c0 .621.504 1.125 1.125 1.125m17.25-2.625V8.25c0 .621-.504 1.125-1.125 1.125m0 0h-7.5A1.125 1.125 0 0112 8.25m0 0V12m0-3.75h9.75m-9.75 3.75H3.375" />
                </svg>
            )
        },
        {
            title: "Innovation",
            desc: "Bridging the gap between traditional farming and modern financial technology.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            )
        },
        {
            title: "Community",
            desc: "Empowering farmers and investors through a shared ecosystem of growth.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Simple Aurora Header */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#022c22]">
                
                {/* Aurora Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-green-600/30 rounded-full blur-[120px] animate-pulse mix-blend-screen" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
                    <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-lime-500/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                    <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-green-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                            Our Core Promise
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-8">
                        {/* <span className="block animate-in slide-in-from-bottom-8 duration-1000 delay-100">Transparency.</span>
                        <span className="block animate-in slide-in-from-bottom-8 duration-1000 delay-300 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Technology.</span>
                        <span className="block animate-in slide-in-from-bottom-8 duration-1000 delay-500">Trust.</span> */}
                    ABOUT US
                    </h1>

                    <p className="text-lg md:text-xl text-green-100/70 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                        Building the future of sustainable livestock investment.
                    </p>
                </div>
            </section>

            {/* Mission Section (Image Right) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center ">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 relative inline-block">
                            Our Mission
                            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-green-600 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At AnimalKart, our mission is to democratize livestock ownership by providing a secure, transparent, and mobile-first platform. We bridge the gap between urban investors and rural farmers, ensuring fair value and professional management for every animal.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-gray-800">
                            We leverage IoT technology and data analytics to provide real-time insights into cattle health and productivity, transforming traditional farming into a modern, data-driven asset class.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 relative group">
                        <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="images/mision.jpeg"
                                alt="Modern Farming"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 z-20 hidden md:block animate-in slide-in-from-left-4 duration-700">
                            <span className="text-4xl font-black text-green-600 block">12k+</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Investors</span>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Vision Section (Image Left, Data Right) */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="images/vision.jpeg"
                                    alt="Sustainable Future"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl z-0"></div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 relative inline-block">
                                Our Vision
                                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-green-600 rounded-full"></span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We envision a world where every individual can contribute to and benefit from the growth of the agricultural sector. Our goal is to create a seamless ecosystem that connects cattle owners, investors, and dairy consumers through a decentralized web of trust.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium text-gray-800 italic">
                                "Empowering the next billion through transparent, profitable, and ethical livestock management."
                            </p>
                            {/* <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="p-4 border-l-4 border-green-600 bg-white">
                                    <span className="block text-2xl font-bold text-gray-900">2030</span>
                                    <span className="text-sm text-gray-500 font-medium uppercase tracking-tighter">Target for Carbon Neutrality</span>
                                </div>
                                <div className="p-4 border-l-4 border-green-600 bg-white">
                                    <span className="block text-2xl font-bold text-gray-900">100+</span>
                                    <span className="text-sm text-gray-500 font-medium uppercase tracking-tighter">Partner Smart Farms</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-500 max-w-xl mx-auto font-medium">These principles guide every decision we make, from the boardroom to the barn.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(74,222,128,0.4)] hover:border-green-500 transition-all duration-300 border border-gray-100/50 flex flex-col items-center text-center group">
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}


            <Footer />

        </div>
    );
};

export default AboutPage;
