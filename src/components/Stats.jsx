const Stats = () => {
  const stats = [
    ["29+", "Years of Experience"],
    ["874+", "Active Farms"],
    ["169k+", "Happy Investors"],
    ["265+", "Premium Livestock"],
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/30 border-y border-green-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(([value, label], i) => (
            <div key={i} className="text-center group p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500 border border-transparent hover:border-green-100">
              <div className="text-4xl md:text-6xl font-black bg-gradient-to-br from-[#1a4d2e] to-[#4f852a] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform font-bricolage tracking-tighter">
                {value}
              </div>
              <div className="w-12 h-1.5 bg-[#84CC16] mx-auto rounded-full mb-5 group-hover:w-24 transition-all duration-300 opacity-80"></div>
              <p className="font-bold text-gray-500 uppercase tracking-widest text-xs font-sans">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
