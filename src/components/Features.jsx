const Features = () => {
  const features = ["Secure", "Mobile First", "Smart Insights", "Community"];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        Why AnimalKart Stands Out
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold">{f}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
