import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-end justify-start overflow-hidden">
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hro.jpeg')" }}
        >
            {/* Overlays removed for full clarity */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32">
            <div className="max-w-4xl">
                {/* Badge */}
                {/* <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-1000"> */}
                    {/* <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse"></span> */}
                    {/* <span className="text-xs font-bold text-green-400 tracking-[0.2em] uppercase font-sans">The Future of Investing</span> */}
                {/* </div> */}

                {/* Title */}
                <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter mb-8 font-bricolage mix-blend-overlay opacity-90 animate-in slide-in-from-bottom-12 duration-1000 delay-200">
                    ANIMAL <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CC16] to-emerald-500 normal-case opacity-100 mix-blend-normal">KART </span>
                </h1>

                {/* Description */}
                <div className="flex flex-col md:flex-row gap-8 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                    <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-xl border-l-2 border-[#84CC16] pl-6 backdrop-blur-sm">
                        Let our local AnimalKart team safely and effectively care for your livestock investment, so you and your family can experience it at its best.
                    </p>
                </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-20 animate-pulse delay-1000">
            <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest -rotate-90 origin-bottom translate-y-8">Scroll</span>
            <div className="w-px h-24 bg-gradient-to-b from-green-400/0 via-green-400 to-green-400/0"></div>
        </div> */}
    </section>
  );
};

export default Hero;
