const TimelineJourney = () => {
  const timeline = [
    {
      year: "2008",
      title: "Foundation",
      desc: "AL-Zohra begins as a small sewing training unit for widows in Lyari.",
    },
    {
      year: "2012",
      title: "Girls’ Literacy Program",
      desc: "Launched evening school for working girls with free books and uniforms.",
    },
    {
      year: "2015",
      title: "Health & Wellness Clinics",
      desc: "Opened first mobile health clinic for underserved communities in Karachi.",
    },
    {
      year: "2020",
      title: "COVID-19 Relief",
      desc: "Distributed over 20,000 ration packs and hygiene kits during the pandemic.",
    },
    {
      year: "2023",
      title: "Digital Skills Hub",
      desc: "Opened digital literacy lab for women in partnership with local tech firms.",
    },
  ];

  return (
    <section className="timeline-section py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-primary">Milestones</h2>
        <ul className="space-y-8 border-l-4 border-primary pl-6">
          {timeline.map((item, index) => (
            <li key={index}>
              <div className="mb-1 font-semibold text-xl text-gray-800">
                {item.year} – {item.title}
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TimelineJourney;
