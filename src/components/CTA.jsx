const CTA = () => {
  return (
    <section className="bg-green-900 text-white py-12 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Start Growing?</h2>
      <div className="flex gap-4 justify-center">
        <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-md font-bold">
          Open Account
        </button>
        <button className="border-2 px-10 py-4 rounded-md font-bold">
          Schedule Demo
        </button>
      </div>
    </section>
  );
};

export default CTA;
