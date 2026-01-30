import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const privacySections = [
        {
            // id: "1",
            title: "1. Information We Collect",
            content: [
                "Personal Identity Information: Name, gender, email address.",
                "Contact Information: Registered mobile number for login and OTP verification.",
                "Financial & Transaction Data: Manual payment details (UTR, bank name, IFSC), payment proofs, order history, total investment values.",
                "Referral Data: Information regarding successful referrals and accumulated referral coins."
            ]
        },
        {
            id: "2",
            title: "2. How We Use Your Information",
            content: [
                "Account Management: Verify identity via OTP and manage profile.",
                "Transaction Processing: Verify manual payments and provide invoices for 'Paid' orders.",
                "Investment Projections: Display personalized income projections and milk production.",
                "Rewards Program: Credit Referral reward coins are credited to your AnimalKart account.",
                "Communication: Notify regarding payment verification and order status."
            ]
        },
        {
            id: "3",
            title: "3. Data Storage and Security",
            content: [
                "Secure Storage: Manual payment data and transaction proofs stored securely.",
                "Biometric Security: Optional 'App Lock' via fingerprint for local authentication.",
                "Admin Access: Only authorized Admin and Management teams can verify payments and manage rules."
            ]
        },
        {
            id: "4",
            title: "4. Information Sharing and Disclosure",
            content: [
                "Insurance Partners: For optional insurance coverage of buffalo units.",
                "Admin/Verification Teams: To review submitted manual payments (typically 3 business days).",
                "Third-Party Sharing: Referral links shared via WhatsApp, SMS, or Email only at user direction."
            ]
        },
        {
            id: "5",
            title: "5. Data Retention and User Rights",
            content: [
                "Read-Only Records: Verified orders/payments remain read-only.",
                "Coin Management: You can redeem your referral coins directly within the app.",
                "Account Control: Users can log out anytime, redirected to login screen."
            ]
        },
        {
            id: "6",
            title: "6. Updates to This Policy",
            content: [
                "The policy may be updated as AnimalKart evolves. Continued use indicates acceptance of updated terms."
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-32 md:py-48 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/heroimg.jpg"
                        alt="Privacy Policy Background"
                        className="w-full h-full object-cover bg-black/100 opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-black/100" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4">Legal Framework</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
                            Privacy <span className="text-green-500">Policy</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <div className="space-y-16">
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-gray-200 flex-grow"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter font-logo shrink-0">
                                Privacy <span className="text-green-600">Statement</span>
                            </h2>
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </div>

                        <div className="grid gap-10">
                            {privacySections.map((section) => (
                                <div key={section.id} className="group">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        {/* <span className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center text-sm font-black shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                            {section.id}
                                        </span> */}
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3 pl-11">
                                        {section.content.map((item, index) => (
                                            <li key={index} className="text-gray-600 leading-relaxed flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last Updated */}
                    <div className="pt-10 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
