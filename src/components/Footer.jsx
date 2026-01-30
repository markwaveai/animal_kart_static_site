import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: 'facebook', icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" /></svg>
      )
    },
    {
      name: 'twitter', icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
      )
    },
    {
      name: 'linkedin', icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg>
      )
    },
    {
      name: 'instagram', icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646-.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.059 2.148-.261 2.913-.558.788-.306 1.459-.717 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0z" /><path d="M12 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zM12 16a4 4 0 114-4 4.005 4.005 0 01-4 4zm6.406-11.845a1.44 1.44 0 101.44 1.44 1.44 1.44 0 00-1.44-1.44z" /></svg>
      )
    },
    // {
    //   name: 'github', icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    //   )
    // }
  ];

  return (
    <footer className="bg-[#052e16] text-gray-300 font-sans relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#84CC16] to-transparent opacity-60"></div>

      <div className="max-w-[1440px] mx-auto px-5 pt-5 md:pt-16 pb-6 md:pb-5 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">

          {/* Brand & Mission - 4 Columns */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/AppLogo.png"
                alt="Animal Kart Logo"
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none font-bricolage">
                  ANIMAL<span className="text-[#84CC16]">KART</span>
                </span>
                <span className="text-[0.65rem] font-bold text-green-400/80 tracking-[0.2em] uppercase mt-1.5">
                  Your Landscape Specialist
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-gray-400 font-medium">
              Revolutionizing livestock investment and farm management through transparent ownership and modern technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 justify-start !mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-600 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  aria-label={social.name}
                >
                  <span className="scale-75 group-hover:scale-100 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pl-0 lg:pl-20">
            {/* Column 1: Information */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 capitalize tracking-tight font-bricolage">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'Solution', path: '#solution' },
                  { label: 'Supports', path: '/contact' }
                ].map((item) => (
                  <li
                    key={item.label}
                    onClick={() => {
                      if (item.path.startsWith('#')) {
                        const element = document.getElementById(item.path.substring(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate('/');
                          setTimeout(() => {
                            const el = document.getElementById(item.path.substring(1));
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }
                      } else {
                        navigate(item.path);
                      }
                    }}
                    className="hover:text-[#84CC16] cursor-pointer transition-all hover:translate-x-1 duration-300 font-medium"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Helpful Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 capitalize tracking-tight font-bricolage">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  { label: 'Services', path: '/services' },
                  { label: 'Terms & Conditions', path: '/terms' },
                  { label: 'Privacy Policy', path: '/privacy' }
                ].map((item) => (
                  <li
                    key={item.label}
                    onClick={() => item.path !== '#' && navigate(item.path)}
                    className="hover:text-[#84CC16] cursor-pointer transition-all hover:translate-x-1 duration-300 font-medium"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services (Location) */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 capitalize tracking-tight font-bricolage">Location</h3>
              <div className="flex gap-5 items-start group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#84CC16]/50 transition-colors shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#84CC16]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="text-sm space-y-2">
                  <p className="text-white font-medium">Corporate Office</p>
                  <p className="leading-relaxed opacity-80 max-w-[200px] text-gray-400">
                    206, 2nd Floor, Block-A, PSR Prime Towers, Gachibowli, Hyderabad, 500032
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} AnimalKart. All rights reserved.
          </div>

          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-[#84CC16] transition-colors cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#84CC16] transition-colors cursor-pointer">Terms & Conditions</Link>
          </div>
        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#84CC16]/10 rounded-full blur-[100px] mix-blend-screen"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#84CC16]/5 rounded-full blur-[100px] mix-blend-screen"></div>
    </footer>
  );
};

export default Footer;

