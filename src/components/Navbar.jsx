import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const showWhiteBg = isScrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showWhiteBg
            ? 'bg-white/100 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 z-50">
            <img
              src="/images/image 1.png"
              alt="Animal Kart Logo"
              className={`w-12 h-12 object-contain transition-all duration-300 ${showWhiteBg ? 'brightness-0' : 'brightness-0 invert'}`}
            />
            <span className={`font-bricolage font-bold text-xl tracking-tight hidden sm:block transition-colors duration-300 ${showWhiteBg ? 'text-black' : 'text-white'}`}>
              Animal<span className="text-[#84CC16]">Kart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className={`flex items-center gap-1 rounded-full px-2 py-1.5 border backdrop-blur-sm transition-all duration-300 ${showWhiteBg ? 'bg-black/5 border-black/5' : 'bg-white/5 border-white/5'
              }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-bricolage ${location.pathname === link.path
                      ? 'bg-white text-black shadow-md'
                      : showWhiteBg
                        ? 'text-gray-700 hover:text-black hover:bg-black/5'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Login Button */}
            <a
              href="https://animalkart.in"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 font-semibold text-sm pl-4 border-l transition-colors duration-300 ${showWhiteBg
                  ? 'text-black border-black/20 hover:text-[#84CC16]'
                  : 'text-white border-white/20 hover:text-[#84CC16]'
                }`}
            >
              <span>Log in</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${showWhiteBg
                ? 'text-black hover:bg-black/5'
                : 'text-white hover:bg-white/10'
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-[#0a0a0a] border-l border-white/10 z-50 transform transition-transform duration-300 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <span className="text-white font-bricolage font-bold text-xl">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col p-6 gap-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-menu-item flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all ${location.pathname === link.path
                  ? 'bg-white text-black'
                  : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-white/5">
          <a
            href="https://animalkart.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#84CC16] hover:bg-[#65a30d] text-white py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95"
          >
            <span>Log in to Portal</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
