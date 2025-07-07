const ImpactSection = () => {
  const stats = [
    { number: "12,000+", label: "Women Trained in Skills" },
    { number: "5,000+", label: "Children Educated" },
    { number: "300+", label: "Medical Camps Organized" },
    { number: "1,200+", label: "Small Businesses Launched" },
    { number: "20,000+", label: "Families Helped in Emergencies" },
    { number: "100+", label: "Volunteers & Partners" },
  ];

  return (
    <section className="impact-section py-20 px-4 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold text-primary">{item.number}</h3>
              <p className="mt-2 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
