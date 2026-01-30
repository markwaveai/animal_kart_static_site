import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const termsSections = [
        {
            id: "1",
            title: "1. Unit Purchase",
            content: [
                "One unit = 2 buffaloes + 2 calves.",
                "Total investment = Unit price.",
                "Asset value and milk revenue projections are indicative (10-year estimates).",
                "Expected revenue break-even period is approximately 42 months, enabling faster capital recovery.",
                "Income is protected through the Cattle Protection Fund (CPF), providing a structured income safety mechanism.",
                "CPF safeguards livestock against unforeseen risks, reducing revenue volatility.",
                "This protection ensures continuity of income and supports steady asset appreciation over time."
            ]
        },
        {
            id: "2",
            title: "2. Referral Program & Coin Conversion",
            content: [
                "Coins earned only via successful referrals who complete a purchase.",
                "Reward Rate: Based on referred user purchase.",
                "1 Coin = ₹1 within app, coins non-transferable/non-withdrawable."
            ]
        },
        {
            id: "3",
            title: "3. Coin-Based Purchases and Gifting",
            content: [
                "Coins can be used for purchases within the app.",
                "Purchased units can be gifted to another person once balance requirement is met."
            ]
        },
        {
            id: "4",
            title: "4. Payment and Verification",
            content: [
                "All manual payments verified by Admin before status changes to 'Paid'.",
                "Verification typically takes 3 business days.",
                "Invoices generated only after payment verification."
            ]
        },
        {
            id: "5",
            title: "5. KYC & Government Identification Data",
            content: [
                "Aadhaar & PAN collected strictly for identity verification and regulatory compliance.",
                "Aadhaar biometric info is not collected or stored.",
                "Data securely encrypted, accessed only by authorized personnel."
            ]
        },
        {
            id: "6",
            title: "6. User Consent",
            content: [
                "By installing and using AnimalKart, users consent to the collection, storage, and usage of their personal information as described."
            ]
        },
        {
            id: "7",
            title: "7. Third-Party Data Sharing",
            content: [
                "Personal data is never sold, rented, or traded.",
                "Shared only with essential service partners for operational purposes."
            ]
        },
        {
            id: "8",
            title: "8. Data Deletion & Account Removal",
            content: [
                "Users may request account deletion via support@animalkart.in. Certain financial/transactional records may be retained as per law."
            ]
        },
        {
            id: "9",
            title: "9. Risk & Return Disclaimer",
            content: [
                "All investment values, Monthly revenue figures, income projections, and asset appreciation details are indicative estimates only and do not guarantee returns."
            ]
        }
    ];

    return (
        <div className=" min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-32 md:py-48 ">
                <div className="absolute  bg-[#0d1117] inset-0 z-0">
                    <img
                        src="/images/terms.jpg"
                        alt="Terms Background"
                        className="w-full h-full  object-cover"
                    />
                    <div className="absolute inset-0 bg-black/100" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4">Legal Framework</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
                            Terms & <span className="text-green-500">Conditions</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                            Please read these terms carefully before using the AnimalKart platform. These terms govern your access to and use of our services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <div className="space-y-16">
                    <div className="pt-10">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-gray-200 flex-grow"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter font-logo shrink-0">
                                Terms <span className="text-green-600">& Conditions</span>
                            </h2>
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </div>

                        <div className="grid gap-10">
                            {termsSections.map((section, index) => (
                                <div key={index} className="group">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        {/* <span className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center text-sm font-black shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                            {index + 1}
                                        </span> */}
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3 pl-11">
                                        {section.content.map((item, idx) => (
                                            <li key={idx} className="text-gray-600 leading-relaxed flex items-start gap-3">
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

export default TermsPage;
