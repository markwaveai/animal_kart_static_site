import React from 'react';
import { Link } from 'react-router-dom';

const WhatsAppContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center">
            <Link
                to="/contact"
                className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
            >
                {/* Contact Icon Circle */}
                <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] mb-1">
                    {/* Animated ping effect */}
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

                    {/* Chat Bubble Icon */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-gray-700 relative z-10"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <line x1="8" y1="7" x2="16" y2="7" />
                        <line x1="8" y1="10" x2="16" y2="10" />
                        <line x1="8" y1="13" x2="14" y2="13" />
                    </svg>
                </div>

                {/* Caption */}
                <div className="bg-white px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-50 transition-all group-hover:bg-green-600 group-hover:border-green-600">
                    <span className="text-[10px] font-bold text-gray-800 whitespace-nowrap group-hover:text-white uppercase tracking-wider">Contact Us</span>
                </div>
            </Link>
        </div>
    );
};

export default WhatsAppContact;
